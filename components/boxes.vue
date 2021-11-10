<template>
  <v-responsive :aspect-ratio="16 / 4" class="d-flex justify-center align-center pa-2" style="background: #fbc439; color: #FFFFFF;">
    <v-container>
        <v-row class="d-flex justify-center align-center">
            <h1 class="d-flex justify-center align-center headline"  style="color: black">
                
            </h1>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-card class="ma-2 rounded-xl" width="300" height="270"  v-for="(item, i) in conteudo.items" :key="i">
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around">
                    <v-img :src="item.imagem" width="67" height="58"></v-img>
                    <p v-html="item.descricao" class="mt-5"></p>
                </v-card-text>
            </v-card>
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