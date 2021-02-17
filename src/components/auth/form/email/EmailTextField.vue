<template>
  <v-text-field
    ref="textField"
    :validate-on-blur="isValidateOnBlur"
    clearable
    :hint="hint"
    :value="value"
    :rules="rules"
    type="email"
    label="Email"
    prepend-inner-icon="mdi-at"
    placeholder="Type your email"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script>
export default {
  name: 'EmailTextField',

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
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    isValidateOnBlur: {
      type: Boolean,
      required: false,
    },
  },

  data: () => ({
    rules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'E-mail must be valid',
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
