<template>
        <v-content class="mx-12 py-2 my-5">
            <h1 class="d-flex justify-center align-center text-h4">Quem somos?</h1>
            <v-row class="d-flex flex-row flex-wrap justify-center  my-10">
                <v-card height="300" width="40%" min-width="350" shaped
                class="d-flex justify-space-around align-center mx-2 pa-6">
                Prop based elevation
                </v-card>
                <v-card flat width="40%" min-width="350" class="d-flex justify-space-around align-center mx-2 pa-6">
                <p>{{texto}}</p></v-card>
            </v-row>
        </v-content>
</template>
<script>
export default {
  data: () => ({
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }),
};
</script>
</script>
