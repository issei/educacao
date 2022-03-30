<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
      <h1 class="d-flex justify-center align-center headline">{{ titulo }}</h1>
      <v-row class="d-flex justify-center my-10">
        <v-col class="d-flex align-stretch justify-center" justify-center>
          <v-img contain :src="imagem" width="300" height="270"></v-img>
        </v-col>
        <v-col class="d-flex align-stretch flex-column justify-center align-center pb-1">
          <v-col v-for="(item, i) in itens" :key="i" class="d-flex flex-row">
            <v-img :src="item.imagem" width="67" height="58" class="mr-5"></v-img>
            <p v-html="item.texto"></p>
          </v-col>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-1">
        <BtnWhats :btnColor="btnColor" class="mr-4" :texto_botao="texto_botao"></BtnWhats>
      </v-row>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  props: ["titulo", "itens", "imagem", "btnColor" , "texto_botao"],
  data: () => ({}),
};
</script>