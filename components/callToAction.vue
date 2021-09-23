<template>
 <v-responsive id="lead" 
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
    style="background: #deeeee;"
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="d-flex justify-center align-center headline my-5">
            {{ titulo }}
          </h1>
          <span class="d-flex justify-center align-center subheading my-5">
            {{subtitulo}}
          </span>
          <Lead texto_botao="Entre na lista de espera"></Lead>
        </v-col>
      </v-row>
      </v-container>
  </v-responsive>
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