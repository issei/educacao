<template>
    <v-responsive :aspect-ratio="16/6" class="d-flex justify-center align-center "
    :style="headline.style">
    <v-container>
    <v-row align="center" justify="center" class="justify-space-around">
      <v-col>
      <v-row align="center" justify="center">
        <v-col class="text-left" cols="12">
          <h1 class="text-md-h3 text-sm-h4" v-html="headline.titulo"></h1>
          <h4 class="text-md-h6 text-sm-h7 mt-5" v-html="headline.subtitulo" ></h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="10">
          <v-row justify="center" class="mt-5">
            <v-btn :color="headline.btnColor" class="mr-4" @click="$vuetify.goTo('#lead')">{{headline.texto_botao}}</v-btn>
          </v-row>
        </v-col>
      </v-row>
      </v-col>
      <v-col>
        <v-img
          contain
          :src="headline.imagem"
          width="600"
        ></v-img>
      </v-col>
    </v-row>
    </v-container>
    </v-responsive>
</template>
<script>
export default {
  props:['headline'],
  data: () => ({})
}
</script>
