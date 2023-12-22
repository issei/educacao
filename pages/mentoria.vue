<template>
<v-main >
  <v-responsive :aspect-ratio="16/6"  class="d-flex justify-center align-center  fundoConsultoria">
    <v-container no-gutters="true">
      <v-row class="d-lg-none" ></v-row>
    <v-row class="justify-center align-center" no-gutters="true">
      <v-col lg="1" xs="12"  sm="12"></v-col>
      <v-col lg="5" xs="12" sm="12" class="justify-end">
        <v-row align="center" justify="center">
          <v-col class="text-left" cols="12">
            <span class="isseiHeadline">
              3 MESES DE ACOMPANHAMENTO PARA DESENVOLVER O SEU POSICIONAMENTO COMO GERENTE DE PROJETOS DE LANÇAMENTOS DIGITAIS E ESCALAR OS SEUS SERVIÇOS
            </span>
            <span class="d-flex mt-5 justify-space-around align-center" style="color:#000;font-size: 19px !important;">
              Eu, Talita Issei, vou trabalhar pessoalmente ao seu lado para ajudá-la a construir seu Posicionamento como Gerente de Projetos e implementar todas as estratégias que testei para elevar seu faturamento ao próximo nível.
            </span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-row justify="center" class="mt-5">
              <v-btn id="chamarWhatsApp" class="mr-4" color="#25d366" @click="openWhats" rounded width="350" height="50" style="color:#FFFFFF;font-size: 19px !important;"><v-icon left>mdi-whatsapp</v-icon>FALE COMIGO</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col no-gutters="true" class="order-lg-last" >
        <v-img contain src="/fotos/IMG_3698.png" class="fotoTalitaHead" ></v-img>
      </v-col>
    </v-row>
    </v-container>
    </v-responsive>


    
    <v-responsive class="d-flex justify-center align-center sessao" >
    <v-container>
      <v-row class="d-flex justify-center text-center align-center titulos">
        MENTORIA PARA GERENTE DE PROJETOS
        </v-row>
        <v-row class="d-flex justify-center text-center align-center titulos mt-10">
        É PARA QUEM:  
        </v-row>
        <v-row class="d-flex justify-center align-center pt-5">
            <v-card class="ma-2 rounded-xl" width="300" height="250"  v-for="(item, i) in praquem.items" :key="i" elevation="10">
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;">
                      <path
                        d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471"
                        stroke="#0d4e1a" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#0d4e1a" stroke-width="1.86537"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p v-html="item.descricao" class="mt-5"></p>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
  </v-responsive> 
  <v-divider></v-divider>
  <v-responsive class="d-flex justify-center align-center">
    <v-container>
        <v-row  class="d-flex justify-end">
                   
          <v-col class="d-flex align-center justify-center" sm="12" lg="5" xs="12" cols="12">
            <v-card class="ma-2 rounded-xl" elevation="10">
                <v-card-text class="d-flex flex-column justify-center align-center">
              <v-row class="">
                <p class="d-flex align-center text-center">
                  Minha trajetória inclui mais de 20 lançamentos digitais de destaque, nos quais atuei como Gerente de Projetos. Essas experiências me permitiram desenvolver uma metodologia única e robusta.
                </p>
              </v-row>
              <v-row><p class="mt-4 text-center ">
                Na mentoria, você terá acesso a conteúdo prático e relevante, baseado em desafios reais de grandes projetos, garantindo aplicabilidade imediata. Além disso, a mentoria é customizada para suas necessidades. Começamos com um diagnóstico detalhado para alinhar seus objetivos e seguimos com sessões focadas em suas áreas de desafios, tudo dentro de uma metodologia consolidada e eficiente. 
                </p></v-row>
            </v-card-text>
            </v-card>
          </v-col>
          <v-col class="d-flex align-center justify-center" sm="12" lg="4" xs="12" cols="12">
            <v-img eager src="https://issei.com.br/fotos/IMG_3398.jpg" width="500" height="500" contain></v-img>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="370" height="50" 
            style="color:#FFFFFF;font-size: 21px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
          </v-btn>
        </v-row>
    </v-container>
  </v-responsive>
  <v-divider></v-divider> 
  <v-responsive class="d-flex justify-center align-center sessao">
    <v-container >
      <v-row class="d-flex justify-center align-center mb-10 mt-10">
        <span class="font-weight-black text-center titulos">PILARES DA MENTORIA</span>
      </v-row>
      <v-row justify="center" align-content="center" v-if="entregaveis.items.length > 1" class="d-flex flex pa-0">
        <v-col v-for="(item, i) in entregaveis.items" :key="i" cols="12" lg="6" sm="6"  class="pa-2">

          <v-card class="mx-auto rounded-xl" width="500" height="500" elevation="10">
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around">
                  <v-icon size="50">{{ item.imagem }}</v-icon>
                  <BR/>
                    <span class="titulo-item">{{ item.titulo }}</span><BR/>
                    <p v-html="item.descricao" style="padding-right: 15px;"></p>
                </v-card-text>
            </v-card>

<!--
          <v-row class="pa-0">
            <v-col cols="1" class="ml-0 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;">
                <path
                  d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471"
                  stroke="#0d4e1a" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#0d4e1a" stroke-width="1.86537"
                  stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </v-col>
            <v-col class="">
              <span class="titulo-item">{{ item.titulo }}</span>
              <p v-html="item.descricao" style="padding-right: 15px;"></p>
            </v-col>
          </v-row>
-->

        </v-col>
      </v-row>
      </v-container>
    </v-responsive>
    <v-divider></v-divider>
    <v-responsive :aspect-ratio="16 / 7" class="d-flex justify-center pt-10 px-5 sessao">
  <v-container>
  <v-row class="d-flex justify-center mb-10">
        <span  class="titulos font-weight-black text-center" >Veja o que dizem sobre o meu trabalho</span>
      </v-row>
      <v-row class="d-flex justify-center" >
          <v-col lg="4" sm="12" xs="12" class="d-flex justify-center">
            <v-card class="ma-2 rounded-xl" heigth="700" width="450">
              <v-card-title>
                <v-col lg="3" xs="12" sm="12" class="d-flex justify-center align-center">
                  <v-avatar  width="100" min-width="100" height="100" max-height="100" >
                    <v-img position="center 30%"  src="https://issei.com.br/fotos/JESSICAFOTO.jpeg" lazy  ></v-img>
                  </v-avatar>
                </v-col>
                <v-col lg="9" xs="12" sm="12" class="d-flex justify-left align-center" >
                  <p>Jessica Fortaleza</p>
                </v-col>
              </v-card-title>
              <v-card-text>"A consultoria de processo foi um divisor de águas na minha agência. Antes estava tudo na minha cabeça e eu perdia muito tempo explicando várias e repetidas vezes pro time as tarefas.
Hoje cada um já sabe as suas responsabilidades e já tem autonomia para resolver questões com muito mais rapidez e assertividade.
A agência hoje tem capacidade para receber mais clientes sem sobrecarregar o time pelo simples fato de ter os processos todos bem desenhados.
A Talita é de uma competência ímpar e expertise dela e do time dela foram fundamentais para eu poder agregar ainda mais valor aos meus contratos e mostrar profissionalismo desde o primeiro contato com o cliente.
Serei sempre grata!"</v-card-text>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12"  class="d-flex justify-center">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/jessWhat.jpg" max-height="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12"  class="d-flex justify-center">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/RAFAEL2.png"   max-width="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12"  class="d-flex justify-center">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/THIAGO2.png" max-height="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12"  class="d-flex justify-center">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/VALERIA.jpeg" max-height="700" contain></v-img>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </v-responsive>
  <v-divider></v-divider>
  <v-responsive class="d-flex justify-center  sessao2">
    <v-container>
      <v-row class="d-flex justify-center align-center mt-10">
        <span class="font-weight-black text-center titulos">QUEM É TALITA ISSEI</span>
      </v-row>
      <v-row class="d-flex flex-row flex-wrap align-center">        
        <v-col xs="12" sm="12" lg="6" class="d-flex justify-center">
          <v-img contain eager src="https://issei.com.br/fotos/IMG_3625.jpg" max-height="549" max-width="366" ></v-img>
        </v-col>        
        <v-col class="d-flex align-stretch pt-5" xs="12" sm="12"  lg="4">
          <p v-html="who.texto" class="justify-start" ></p>
        </v-col>
        <v-col lg="2" xs="12" sm="12"  class="d-none d-sm-flex"></v-col>
      </v-row>
        <v-row justify="center">
         <v-btn id="chamarWhatsApp" class="mr-4" color="#25d366" @click="openWhats" rounded width="350" height="50" style="color:#FFFFFF;font-size: 19px !important;"><v-icon left>mdi-whatsapp</v-icon>FALE COMIGO</v-btn>
      </v-row>
      </v-container>
  </v-responsive>   


</v-main>
</template>

<style scoped>
span{
  font-family: 'Poppins', sans-serif !important;
}
 .row{
 margin: 0px;
 }

 i.v-icon.v-icon {
  color: #0d4e1a;
} 

 .fundoConsultoria{
    background-image: url('/fundo/8.png'); 
    background-position: center; 
    background-repeat: no-repeat;  
    background-size: auto;
  }
  .fundoConsultoriaSM{
    background-image: url('/fundo/3.png'); 
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
  }

 .isseiHeadline{
    color:#000;
    font-weight:bold;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead{
    height: 100vh;
  }
  
  .titulos{
    color:#3F3026;
    font-weight:bold;
    font-size: 26px;
    font-family: 'Poppins', sans-serif !important;
  }
  .titulo-item{
    color:#000000;
    font-weight:bold;
    font-size: 19px;
    font-family: 'Poppins', sans-serif !important;
  }
  .fundo-cinza{
    color: #ffffff; 
    background-color: #1f1f1f;
  }
  

 @media only screen and (max-width: 959px) {

  .hero-section{
    color: #000; 
    background-color: #fff; 
  }
  .isseiHeadline{
    font-size: 26px !important;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead{
    height: 400px;
  }
}

@media screen and (min-width: 960) and (max-width: 1264px)  {
  .hero-section{
    color: #000; 
    background-image: url('https://issei.com.br/fundo/2560-x-700-H03.png'); 
    background-position: 50% 0%; 
    background-repeat: no-repeat;  
    background-size: cover;
  }
  .isseiHeadline{
    font-size: 42px !important;
    line-height: 1.2 !important;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead {
  pointer-events: none; /* Para evitar que a sobreposição interfira com interações do usuário */
  }
}
@media only screen and (min-width: 1265px) {
  .hero-section{
    color: #000; 
    background-image: url('https://issei.com.br/fundo/2560-x-700-H03.png'); 
    background-position: 30% 0%; 
    background-repeat: no-repeat;  
    background-size: cover;
  }
  .isseiHeadline{
    font-size: 42px !important;
    line-height: 1.2 !important;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead {
  pointer-events: none; /* Para evitar que a sobreposição interfira com interações do usuário */
  }
}
</style>

<script>

export default {
  mounted() {
  },
  data() {
    return {

      praquem: {
        titulo: "MENTORIA PARA GERENTE DE PROJETOS",
        items: [
        {
          imagem: "mdi-puzzle-outline",
          descricao: "Sente dificuldade de se Posicionar como Gerente de Projetos."
        },
        {
          imagem: "mdi-rocket-launch",
          descricao: "Sente falta de confiança ou habilidades para gerenciar lançamentos digitais de grande escala."
        },
        {
          imagem: "mdi-star-outline",
          descricao: "Deseja atrair clientes que reconheçam o valor de seus serviços e estejam dispostos a pagar mais."
        },
        {
          imagem: "mdi-trending-up",
          descricao: "Está buscando aumentar seu faturamento e levar sua carreira a um novo patamar financeiro."
        },
        {
          imagem: "mdi-graph-outline",
          descricao: "Já é uma profissional que tem experiência com projetos menores, mas que aspira a liderar projetos mais significativos e complexos."
        }
      ]
      },
      entregaveis:{
        items: [
          {
          imagem: "mdi-bullseye-arrow",
          titulo: "Como se Posicionar como Gerente de Projetos para Atrair Melhores Clientes",
          descricao: "Transforme-se em uma gerente de projetos profissional e segura, capaz de atrair clientes que reconhecem e estão dispostos a investir significativamente no valor do seu trabalho. Eleve sua carreira a um patamar superior, onde sua expertise não apenas é desejada, mas também altamente valorizada no mercado digital."
        },
        {
          imagem: "mdi-account-supervisor",
          titulo: "Tenha Segurança ao Liderar Equipes",
          descricao: "Desenvolva a habilidade de liderar com confiança, tornando-se capaz de inspirar e motivar o time em direção ao sucesso. Visualize-se como uma líder respeitada, reconhecida por sua capacidade de gerenciar conflitos e promover uma comunicação eficaz."
        },
        {
          imagem: "mdi-puzzle-outline",
          titulo: "Domine a Gestão de Projetos Digitais",
          descricao: "Prepare-se para gerenciar projetos digitais complexos, conduzindo cada etapa com domínio e segurança. Aprenda a planejar, organizar e monitorar de forma eficiente, assegurando uma gestão eficaz.  "
        },
        {
          imagem: "mdi-graph-outline",
          titulo: "Aprenda a Padronizar Processos de Forma Eficiente",
          descricao: "Transforme-se em uma gerente que implementa processos bem estruturados e eficientes, garantindo resultados consistentes e de alta qualidade. Após a mentoria, você possuirá habilidades para estabelecer práticas que asseguram consistência e qualidade excepcionais em todos os seus projetos"
        }
      ]
      },
      
      who:{
        titulo: "QUEM É TALITA ISSEI",
        foto: "/fotos/IMG_3398.jpg",
        texto: "<p>Com mais de 15 anos de trajetória em Grandes Empresas Multinacionais e Consultorias, atuei na liderança de projetos e equipes, demonstrando uma sólida habilidade em gestão e coordenação.<BR/><BR/>Nos últimos 2 anos e meio, direcionei minha carreira para o universo do Marketing Digital, onde participei ativamente de mais de 20 lançamentos digitais significativos, atuando como Gerente de Projetos.<BR/><BR/>Entre esses, destacam-se lançamentos de grande reconhecimento no mercado digital, conhecidos como 'faixas pretas'.<BR/><BR/>Sou apaixonada por desenvolver pessoas, buscando sempre realçar e potencializar as melhores qualidades que possuem.<BR/><BR/>Atualmente, faço parte de uma das maiores mentorias do marketing digital, o “Bastidor Pro” - Priscila Zillo.</p>",
      },
    };
  },
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
};
</script>