<template>
  <v-app>
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      class="d-flex justify-center"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>.
    </v-footer>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5F5585F"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<noscript>
<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=232929938805467&ev=PageView&noscript=1"/>
</noscript>
  </v-app>
</template>

<style>
.headline-titulo{
  color: black;
  font-size: 42px;
  font-weight: 500;
  line-height: 65px;
  letter-spacing: -1px;
}
.headline-subtitulo{
    color: #000000;
    font-family: "Poppins", Sans-serif;
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 2px;
}
p {
    font-family: "Poppins", Sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
}
</style>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

