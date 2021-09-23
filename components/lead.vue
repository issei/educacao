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
      green
    ></v-text-field>
    <v-btn :disabled="!valid && loading" color="success" class="mr-4" @click="validate" :loading="loading">
      {{texto_botao}}
    </v-btn>
    <v-overlay :value="loading"></v-overlay>
  </v-form>
</template>
<script>
export default {
  props: ['texto_botao'],
  data: () => ({
    loading: false,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "Informe seu E-mail",
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
      this.loading = false;
      this.$refs.form.resetValidation();
    },
    async nameOfFunction(){
      this.$nuxt.$loading.start()
      this.loading = true;
    const post = await this.$axios.$post('https://api.issei.com.br/lead', 
    {
        email: this.email,
    }, 
     {}).then((result)=> {
       console.log(result);
       this.loading = false;
       this.$nuxt.$loading.finish()
       this.$router.push("/obrigado");
     }
     )
}
  },
};
</script>