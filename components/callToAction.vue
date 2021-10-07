<template>
 <v-responsive id="lead" 
    :aspect-ratio="16 / 5"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
    style="background: #55beb3; color: #FFFFFF;"
  >
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="d-flex justify-center align-center h3 my-4">
            {{ titulo }}
          </h1>
          <span class="d-flex justify-center align-center h3 my-4">
            {{subtitulo}}
          </span>
          <Lead texto_botao="Entre na lista de espera"></Lead>
          <span class="caption">Ao inscrever-se em nossa lista, você concorda com nossa <NuxtLink to="/politica-de-privacidade">Política de Privacidade</NuxtLink>.</span>
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