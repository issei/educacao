<template>
  <v-app>
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      class="d-flex justify-center"
      style="color: #000;"
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
  font-family: 'Poppins', sans-serif;
}
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
    font-size: 17px;
    font-weight: 300;
    line-height: 30px;
}
</style>

<script>
export default {
  head:{
    meta: [
        { hid: 'og:image', property: 'og:image', content: 'https://issei.com.br/fundo/500x300-thumb-03.png' },
      ]
  },
  data () {
    return {

    }
  }
}
</script>

