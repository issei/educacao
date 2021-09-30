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
    <v-btn
      id="envioLead"
      :disabled="!valid && loading"
      color="success"
      class="mr-4"
      @click="validate"
      :loading="loading"
    >
      {{ texto_botao }}
    </v-btn>
  </v-form>
</template>
<script>
export default {
  props: ["texto_botao"],
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
    async nameOfFunction() {
      this.$nuxt.$loading.start();
      this.loading = true;
      this.$sha256(this.email).then((hashMail) => {
        console.log(hashMail);
        const data = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(new Date() / 1000),
              action_source: "email",
              user_data: {
                em: [hashMail],
              },
              custom_data: {
                currency: "BRL",
                value: 1,
              },
            },
          ],
        };
        this.$axios
          .$post(
            "https://graph.facebook.com/v12.0/232929938805467/events?access_token=EAAFlrX2sbZAsBADJSUyKGZC5IDuqPtr8KGjuvUElXI5rPTK3Y4FRwnZCpi5RZBAj66qTv9RrwpQUsd4QmkA9yzT6fxu84bPFCZAcM6JPOe1eJVZAgm7TACPf4GmsSeUIbvemhjhjh1KRQYnTg65i7MZAJZBZB3DOMpFrx7dFdULoqqoBCcwZCQetN0v5NON7KKwIQZD",
            data,
            {}
          )
          .then((resultEvent) => {
            console.log(resultEvent);
            this.$axios
              .$post(
                "https://api.issei.com.br/lead",
                {
                  email: this.email,
                },
                {}
              )
              .then((result) => {
                console.log(result);
                this.loading = false;
                this.$nuxt.$loading.finish();
                this.$router.push("/obrigado");
              });
          });
      });
    },
  },
};
</script>