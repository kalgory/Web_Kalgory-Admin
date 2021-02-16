<template>
  <v-text-field
    ref="textField"
    validate-on-blur
    clearable
    :hint="hint"
    :value="value"
    :rules="rules"
    type="password"
    label="Password"
    prepend-inner-icon="mdi-lock-outline"
    placeholder="Type your password"
    :success="isSuccess"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script>
export default {
  name: 'PasswordTextField',

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
    hint: {
      type: String,
      required: false,
      default: '',
    },
    isSuccess: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || '비밀번호를 입력해주세요',
      (v) => (v || '').length >= 8 || '8자 이상 입력해주세요',
      (v) => /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v) || '유효하지 않은 비밀번호입니다',
    ],
  }),

  watch: {
    isFocus(value) {
      if (value) {
        this.$refs.textField.$refs.input.focus();
      } else {
        this.$refs.textField.$refs.input.blur();
      }
    },
  },

  methods: {
    onBlur() {
      this.$emit('blur');
    },
    onFocus() {
      this.$emit('focus');
    },
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
