<template>
 <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
            <h1 class="d-flex justify-center align-center headline">{{titulo}}</h1>
            <v-row class="d-flex flex-row flex-wrap justify-center  mt-10">
                <v-img contain :src="foto" width="300" height="300"></v-img>
                <v-card flat width="50%" min-width="350" class="d-flex justify-space-around align-center mx-2 pa-6">
                <p v-html="texto"></p></v-card>
            </v-row>
             <v-row justify="center">
              <BtnWhats btnColor="#03989e" class="mr-4" texto_botao="Vamos conversar"></BtnWhats>
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
