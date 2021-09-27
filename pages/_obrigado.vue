<template>
 <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
        <v-row align="center" justify="center" class="my-10">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/d94yQ-NRZUc?autoplay=1&rel=0&showinfo=0&modestbranding=1&disablekb=1&controls=0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                frameborder="0"/>
        </v-row>
        <v-row align="center" justify="center" class="my-10">
            <v-dialog hide-overlay='true' scrollable='false' max-width="800px" transition="dialog-bottom-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn id="abrirPesquisa"
                  color="success"
                  v-bind="attrs"
                  v-on="on"
                >
                  Pesquisa
                </v-btn>
              </template>
              <v-card>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMsZ2Nlbm8jxAHJiFGA81w8SLS9ob4DD_O6AOmQBIwFLZ9lQ/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" >Carregando…</iframe>
              </v-card>
            </v-dialog>
        </v-row>
</v-container>
  </v-responsive>
</template>
<script>
export default {
    props: ['texto_botao'],
    data: () => ({
    }),
    methods: {
    },
}
</script> 