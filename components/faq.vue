<template>
<v-main class="d-flex justify-content mx-10 py-5 my-5">
    <v-row justify="center">
        <h1 class="d-flex justify-center align-center text-h4">Perguntas Frequentes</h1>
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
        <v-expansion-panel-content>{{item.resposta}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</v-main>
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
