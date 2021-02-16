<template>
  <v-form
    ref="form"
    @submit.prevent="submit"
  >
    <email-text-field
      v-model="email"
      :is-focus="isEmailTextFieldFocus"
      @blur="isEmailTextFieldFocus=false"
      @focus="isEmailTextFieldFocus=true"
    />
    <password-text-field
      v-model="password"
      :is-focus="isPasswordTextFieldFocus"
      @blur="isPasswordTextFieldFocus=false"
      @focus="isPasswordTextFieldFocus=true"
    />
    <v-btn
      type="submit"
      class="mt-5"
      @click.prevent="submit"
      @keydown.enter="submit"
    >
      SIGN IN
    </v-btn>
  </v-form>
</template>

<script>
import { signInWithEmailAndPassword } from '@/plugins/firebase/auth';
import EmailTextField from '@/components/sign-in/form/EmailTextField.vue';
import PasswordTextField from '@/components/sign-in/form/PasswordTextField.vue';

export default {
  components: {
    PasswordTextField,
    EmailTextField,
  },
  data: () => ({
    isEmailTextFieldFocus: false,
    isPasswordTextFieldFocus: false,
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
          .then((userCredential) => {
            this.$router.push('/');
          })
        // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            this.$toasted.global.error({ message: error.message });
          })
          .finally(() => {
          });
      } else {
        this.$toasted.global.error({ message: '입력이 유효하지 않습니다.' });
      }
    },
  },
};
</script>
