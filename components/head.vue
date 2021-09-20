<template>
  <v-parallax class="d-flex justify-center align-center mx-2 pa-2 my-2">
    <v-container no-gutters>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="headline-titulo" v-html="headline.titulo"></h1>
          <h4 class="headline-subtitulo" v-html="headline.subtitulo"></h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="10">
          <v-row justify="center" class="my-5">
            <v-btn color="success" class="mr-4" @click="$vuetify.goTo('#lead')">{{headline.texto_botao}}</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
export default {
  props:['headline'],
  data: () => ({})
}
</script>
