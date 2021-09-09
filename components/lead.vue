<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      placeholder="preencha@email.com"
      filled
      label="E-mail"
      outlined
      required
      full-width
      color="#ffab1a"
    ></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      {{texto_botao}}
    </v-btn>
  </v-form>
</template>
<script>
export default {
  props: ['texto_botao'],
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail deve ser informado",
      (v) =>
        /.+@.+\..+/.test(v) ||
        "Informe E-mail válido ex. email@dominio.com.br ",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.nameOfFunction();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async nameOfFunction(){
    await this.$axios.$post('https://1fe64b5e-5c1b-4a41-9da9-c4567f0ebcc6.mock.pstmn.io/email', 
    {
        email: this.email,
    }, 
    {
        // Config
    })
}
  },
};
</script>