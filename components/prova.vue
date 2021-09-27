<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container> 
        <h1 class="d-flex justify-center align-center headline">{{ titulo }}</h1>
      <v-row class="d-flex flex-row flex-wrap justify-center justify-space-between my-10">
        <v-card width="">
            <v-card-title>
            </v-card-title>
            <v-card-subtitle>
            </v-card-subtitle>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
            </v-card-actions>
        </v-card>
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