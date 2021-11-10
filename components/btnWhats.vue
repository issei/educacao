<template>
    <v-btn id="chamarWhatsApp" :color="btnColor" @click="openWhats">{{texto_botao}}</v-btn>
</template>
<script>
export default {
  props:['texto_botao','btnColor'],
  data: () => ({
    loading: false,
  }),
  methods: {
    async openWhats() {
      this.$nuxt.$loading.start();
      this.loading = true;
        const data = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(new Date() / 1000),
              custom_data: {
                currency: "BRL",
                value: 1,
              },
            },
          ],
        };
        this.loading = false;
        this.$nuxt.$loading.finish();
        window.open('https://wa.me/5511985043045', '_blank','menubar=no,toolbar=no,location=no');
    }
  }
}
</script>