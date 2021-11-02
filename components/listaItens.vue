<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
      <h1 class="d-flex justify-center align-center headline">{{ titulo }}</h1>
      <v-row class="d-flex justify-center my-10">
        <v-col>
          <v-img contain :src="imagem" width="300" height="300"></v-img>
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center pb-10">
          <v-col v-for="(item, i) in itens" :key="i" class="d-flex flex-row">
            <v-img :src="item.imagem" width="67" height="58" class="mr-5"></v-img>
            <p v-html="item.texto"></p>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  props: ["titulo", "itens", "imagem"],
  data: () => ({}),
};
</script>