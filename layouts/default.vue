<template>
  
  <v-app>
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      class="d-flex justify-center"
      style="background-color: #F4F3F2; color: #54595F;"
      app
    >
      <span class="text-center" style="font-size: 12px !important;">Copyright &copy; {{ new Date().getFullYear() }}</span>
      <span class="text-center" style="font-size: 12px !important;">&nbsp;Talita Yokoyama Issei LTDA.</span>
      <span class="text-center" style="font-size: 12px !important;">&nbsp;CNPJ:41.397.513/0001-65</span>
      <span class="text-center" style="font-size: 12px !important;">&nbsp;&nbsp;<NuxtLink to="/politica-de-privacidade">Política de Privacidade</NuxtLink>&nbsp;&nbsp;</span>
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

