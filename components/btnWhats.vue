<template>
    <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="350" height="50" style="color:#FFFFFF;font-size: 19px !important;"><v-icon left>mdi-whatsapp</v-icon>{{texto_botao}}</v-btn>
</template>
<script>
export default {
  props:['texto_botao','btnColor'],
  data: () => ({
    loading: false,
  }),
  methods: {
    async openWhats() {
        var callback = function () {
          if (typeof (url) != 'undefined') {
            window.location = url;
          }
        };
        this.$nuxt.$loading.start();
        this.loading = true;
        this.$gtag('event', 'conversion', {
          'send_to': 'AW-10950250177/wMFTCLCq784DEMGdvuUo',
          'event_callback': callback
        });
        this.$gtag('event', 'ContatoWhats');
        this.$fbq('track', 'Contact', { currency: "BRL", value: 1.00 });
        this.loading = false;
        this.$nuxt.$loading.finish();
        window.open('https://wa.me/5511985043045', '_blank', 'menubar=no,toolbar=no,location=no');
    }
  }
}
</script>