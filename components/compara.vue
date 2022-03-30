<template>
  <v-responsive
    :aspect-ratio="16 / 4"
    class="d-flex justify-center align-center pa-2"
    :style="estilo"
  >
    <v-container>
      <v-row>
        <v-col class="d-flex align-stretch">
         <v-card class="pa-5" shaped>
            <div class="mb-5" >
              <p class="headline text-center" v-html="conteudo.titulo"></p>
          </div>
          <v-col
            v-for="(item, i) in conteudo.items"
            :key="i"
            class="d-inline-flex align-self-auto align-center align-stretch"
          >
            <v-img :src="item.imagem" width="67" height="58"></v-img>
            <v-sheet width="100%" class="pl-3 justify-space-around" min-height="80">
              <span class="font-weight-black">{{ item.titulo }}</span>
              <p v-html="item.descricao"></p>
            </v-sheet>
          </v-col>
          </v-card>
        </v-col>
        <v-col class="d-flex align-stretch"> 
            <v-card class="pa-5" shaped>
            <div class="mb-5" >
                <p class="headline text-center" v-html="conteudo2.titulo"></p>
            </div>
            <v-col
            v-for="(item, i) in conteudo2.items"
            :key="i"
            class="d-inline-flex align-self-auto align-center align-stretch"
          >
            <v-img :src="item.imagem" width="67" height="58"></v-img>
            <v-sheet width="100%" class="pl-3 justify-space-around" min-height="80">
              <span class="font-weight-black">{{ item.titulo }}</span>
              <p v-html="item.descricao"></p>
            </v-sheet>
          </v-col>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  props: ["estilo","conteudo","conteudo2"],
  data() {
    return {};
  },
};
</script>