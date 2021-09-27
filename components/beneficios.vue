<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
      <v-row class="d-flex justify-center align-center pb-10">
        <h1 class="d-flex justify-center align-center headline"  style="color: black">
          {{ conteudo.titulo }}
        </h1>
      </v-row>
      <v-row
        justify="center"
        align-content="center"
        v-if="conteudo.items.length > 1"
      >
        <v-col
          v-for="(item, i) in conteudo.items"
          :key="i"
          cols="12"
          lg="4"
          sm="5"
          class="d-inline-flex align-self-auto"
        >
          <v-img :src="item.imagem" width="67" height="58"></v-img>

          <v-sheet width="100%" class="pl-3 justify-space-around">
            <span class="font-weight-black">{{ item.titulo }}</span>
            <p>{{ item.descricao }}</p>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center" class="my-5">
        <v-btn color="success" class="mr-4" @click="$vuetify.goTo('#lead')">Lista de Espera</v-btn>
      </v-row>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  props: ["conteudo"],
  data() {
    return {};
  },
};
</script>