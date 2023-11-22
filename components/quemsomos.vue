<template>
 <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
            <h1 class="d-flex justify-center align-center headline">{{titulo}}</h1>
            <v-row class="d-flex flex-row flex-wrap justify-center  mt-10">
              <v-col cols="6" xs="12" sm="12" lg="6">
                <v-img contain :src="foto" max-height="700"></v-img>
              </v-col>
              <v-col cols="6" class="d-flex justify-center align-center pt-5" xs="12" sm="12"  lg="6">
                <p v-html="texto"></p>
              </v-col>
            </v-row>
             <v-row justify="center">
              <BtnWhats btnColor="#5fd9c2" class="mr-4" texto_botao="FALE COMIGO"></BtnWhats>
            </v-row>
            </v-container>
  </v-responsive>
</template>
<script>
export default {
  props:['titulo','texto','foto'],
  data: () => ({
  }),
};
</script>
</script>
