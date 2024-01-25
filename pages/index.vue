<template>
  
  <v-container class="d-flex fill-height justify-center align-center" no-gutters="true">
    <div>
    
      <v-sheet elevation="10" style="width: 300px; min-width:300px; max-width: 400px; margin-right: 5px; margin-left: 5px;">
        <router-link to="/mentoria" style="text-decoration: none;">
          <v-img src="/fotos/thumbMentoria.png" cover style="width: 100%; max-width: 400px;">
          </v-img>
        </router-link>
      </v-sheet>

    <v-row class="d-flex justify-center">
      <v-divider class="my-5"></v-divider>
    </v-row>
      <v-sheet elevation="10" style="width: 300px; min-width:300px; max-width: 400px; margin-right: 5px; margin-left: 5px;"">
        <router-link to="/consultoria" style="text-decoration: none;">
          <v-img src="/fotos/thumbConsultoria.png"  contain style="width: 100%; max-width: 400px;">
          </v-img>
        </router-link>
      </v-sheet>
    </div>
  </v-container>
</template>
<style scoped>
.fundoConsultoria {
  background-image: url('/fundo/8.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.isseiHeadline {
  color: #000;
  font-weight: bold;
  font-family: 'Poppins', sans-serif !important;
}
</style>
<script>
export default {
  layout: 'servico',
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