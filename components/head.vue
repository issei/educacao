<template>
  <v-parallax class="d-flex justify-center align-center mx-2 pa-2 my-2">
    <v-container no-gutters>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="headline-titulo">{{headline.titulo }}</h1>
          <h4 class="headline-subtitulo my-10">{{headline.subtitulo}}</h4>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="text-center my-15" cols="10">
          <Lead :texto_botao="headline.texto_botao"></Lead>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
import Lead from "~/components/lead.vue";
export default {
  props:['headline'],
  components: {
    Lead,
  },
  data: () => ({})
}
</script>
