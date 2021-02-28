<template>
  <v-form
    ref="form"
    @submit.prevent="submit"
  >
    <email-text-field
      v-model="email"
      :is-focus="isEmailTextFieldFocus"
      :is-validate-on-blur="isEmailTextFieldValidateOnBlur"
      @blur="isEmailTextFieldFocus=false"
      @focus="isEmailTextFieldFocus=true"
    />
    <password-text-field
      v-model="password"
      :is-focus="isPasswordTextFieldFocus"
      :is-validate-on-blur="isPasswordTextFieldValidateOnBlur"
      @blur="isPasswordTextFieldFocus=false"
      @focus="isPasswordTextFieldFocus=true"
    />
    <v-btn
      type="submit"
      class="mt-5"
      @click.prevent="submit"
    >
      SIGN IN
    </v-btn>
  </v-form>
</template>

<script>
import { signInWithEmailAndPassword } from '@/plugins/firebase/auth';
import { checkAdmin } from '@/plugins/firebase/firestore/user';
import EmailTextField from '@/components/auth/form/email/EmailTextField.vue';
import PasswordTextField from '@/components/auth/form/password/PasswordTextField.vue';

export default {
  components: {
    PasswordTextField,
    EmailTextField,
  },

  data: () => ({
    isEmailTextFieldFocus: false,
    isPasswordTextFieldFocus: false,
    isEmailTextFieldValidateOnBlur: false,
    isPasswordTextFieldValidateOnBlur: false,
    email: '',
    password: '',
  }),

  computed: {
    isValid() {
      return this.$refs.form.validate();
    },
  },

  mounted() {
    this.isEmailTextFieldFocus = true;
  },

  methods: {
    submit() {
      if (this.isValid) {
        signInWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
          .then((userCredential) => checkAdmin(userCredential.user.uid))
          .then((isAdmin) => {
            if (isAdmin) {
              this.$router.push('/dashboard');
            } else {
              throw Error('Unauthorized Access');
            }
          })
          .catch((error) => {
            this.$toasted.global.error({ message: error.message });
          });
      } else {
        this.$toasted.global.error({ message: '입력이 유효하지 않습니다.' });
      }
    },
  },
};
</script>
