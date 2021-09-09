<template>
<v-content class="d-flex justify-content mx-10 py-5 my-5">
    <v-row justify="center">
        <h1 class="d-flex justify-center align-center text-h4">Perguntas Frequentes</h1>
    </v-row>
    <v-row justify="center" class="my-10">
    <v-expansion-panels  focusable>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        
        <v-expansion-panel-header class="d-flex justify-center" disable-icon-rotate>
          <template v-slot:actions>
            <v-icon class="icon">
              mdi-plus-thick
            </v-icon>
          </template>
          <span  class="header ">Dúvida {{i}} sobre o curso?</span>
          </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</v-content>
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