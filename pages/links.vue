<template>
    <v-container class="fill-height" fluid>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
              <v-list>
                <v-list-item class="my-2">
                  <router-link to="/" style="text-decoration: none; color: inherit;">
                   
                      <v-img src="/fundo/500x300-thumb-03.png" width="500" height="300"> 
                        <v-col cols="7"><p>ORGANIZAÇÃO QUE GERA RESULTADOS NOS SEUS LANÇAMENTOS DIGITAIS: CONSULTORIA DE ESTRUTURAÇÃO DE PROCESSOS</p></v-col>
                      </v-img>
                  </router-link>
                </v-list-item>
                <v-list-item class="my-2">
                  <router-link to="/" style="text-decoration: none; color: inherit;">
                      <v-img src="/fundo/500x300-thumb-02.png" width="500" height="300" contain>
                        <v-col cols="7"><p>3 MESES DE ACOMPANHAMENTO PARA DESENVOLVER O SEU POSICIONAMENTO COMO GERENTE DE PROJETOS DE LANÇAMENTOS DIGITAIS E ESCALAR OS SEUS SERVIÇOS</p></v-col>
                      </v-img>
                  </router-link>
                </v-list-item>
              </v-list>

          </v-col>
        </v-row>
      </v-container>
</template>
<script>
export default {
    mounted() {
    },
    data: () => ({
      links: [
        { text: 'Link 1', url: 'https://exemplo.com' },
        // Adicione mais links aqui
      ]
    }),
    methods: {
    },
}
</script> 