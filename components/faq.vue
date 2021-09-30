<template>
 <v-responsive
    :aspect-ratio="16 / 5"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
    style="background: #cccccc;"
  >
    <v-container>
    <v-row justify="center">
        <h1 class="d-flex justify-center align-center headline">Perguntas Frequentes</h1>
    </v-row>
    <v-row justify="center" class="my-10">
    <v-expansion-panels  focusable>
      <v-expansion-panel
        v-for="(item,i) in perguntas"
        :key="i"
      >
        
        <v-expansion-panel-header class="d-flex justify-center" disable-icon-rotate>
          <template v-slot:actions>
            <v-icon class="icon">
              mdi-plus-thick
            </v-icon>
          </template>
          <span  class="header ">{{item.pergunta}}</span>
          </v-expansion-panel-header>
        <v-expansion-panel-content>
            <p class="ma-5">{{item.resposta}}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
  </v-container>
  </v-responsive>
</template>
<style scoped>
.icon {
        order: 0;
    }

    .header {
        order: 1;
        margin-left: 10px;
    }
</style>
<script>
export default {
  props: ["perguntas"],
  data() {
    return {};
  },
};
</script>
