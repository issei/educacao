<template>
        <v-main class="mx-12 py-2 my-5">
            <h1 class="d-flex justify-center align-center text-h4">{{titulo}}</h1>
            <v-row class="d-flex flex-row flex-wrap justify-center  my-10">
                <v-img contain src="https://issei.imgix.net/issei.png?auto=compress&auto=enhance&mask=ellipse&w=300&h=300" width="300" height="300"></v-img>
                <v-card flat width="50%" min-width="350" class="d-flex justify-space-around align-center mx-2 pa-6">
                <p v-html="texto"></p></v-card>
            </v-row>
        </v-main>
</template>
<script>
export default {
  props:['titulo','texto'],
  data: () => ({
  }),
};
</script>
</script>
