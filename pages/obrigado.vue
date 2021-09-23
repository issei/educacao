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
            <v-btn color="success" class="">Pesquisa</v-btn>
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