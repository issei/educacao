<template>
  <v-parallax id="lead"  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" class="d-flex justify-center align-center rounded-xl mx-5 pa-2 my-4">
    <v-main class="d-flex justify-center align-center">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="d-flex justify-center align-center text-h4 my-5">
            {{ titulo }}
          </h1>
          <span class="d-flex justify-center align-center subheading my-5">
            {{subtitulo}}
          </span>
          <Lead texto_botao="Entre na lista de espera"></Lead>
        </v-col>
      </v-row>
    </v-main>
  </v-parallax>
</template>
<script>
import Lead from "~/components/lead.vue";
export default {
  props: ["titulo", "subtitulo"],
  components: {
    Lead,
  },
  data: () => ({}),
};
</script>