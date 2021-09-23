<template>
    <v-responsive :aspect-ratio="16/6" class="d-flex justify-center align-center mx-2 pa-2 my-2"
    style="background: #deeeee; color: #157060;">
    <v-container>
    <v-row align="center" justify="center">
      <v-col>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4" v-html="headline.titulo"></h1>
          <h4 class="subtitle-1" v-html="headline.subtitulo"></h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="10">
          <v-row justify="center" class="my-5">
            <v-btn color="success" class="mr-4" @click="$vuetify.goTo('#lead')">{{headline.texto_botao}}</v-btn>
          </v-row>
        </v-col>
      </v-row>
      </v-col>
      <v-col>
        <v-img
          contain
          src="./iconehome.png"
          height="300"
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
