<template>
        <v-content class="mx-12 py-2 my-5">
            <h1 class="d-flex justify-center align-center text-h4">{{titulo}}</h1>
            <v-row class="d-flex flex-row flex-wrap justify-center  my-10">
                <v-card flat width="40%" min-width="350" class="d-flex justify-space-around align-center mx-2 pa-6">
                <p>{{texto}}</p></v-card>
                <v-card height="300" width="40%" min-width="350" shaped
                class="d-flex justify-space-around align-center mx-2 pa-6">
                imagem
                </v-card>
            </v-row>
        </v-content>
</template>
<script>
export default {
  props: ['titulo','texto','imagem'],
  data: () => ({
  }),
};
</script>
</script>
