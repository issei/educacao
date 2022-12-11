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
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" width="88" height="31" /></a>.
    </v-footer>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5F5585F"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  </v-app>
</template>

<style>
html,body{
  font-family: 'poppins', sans-serif;
}
.headline-titulo{
  color: white;
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

