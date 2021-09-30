<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"  >
    <v-container>
      <h1 class="d-flex justify-center align-center headline">{{ titulo }}</h1>
      <v-row class="d-flex flex-row flex-wrap justify-center my-10">
        <v-card
          flat
          width="40%"
          min-width="350"
          class="d-flex justify-space-around align-center mx-2 pa-6"
        >
          <p v-html="texto"></p></v-card
        >
        <v-img
          contain
          :src="imagem"
          width="300"
          height="300"
        ></v-img>
      </v-row>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  props: ["titulo", "texto", "imagem"],
  data: () => ({}),
};
</script>
