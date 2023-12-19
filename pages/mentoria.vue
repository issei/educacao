<template>
<v-main >
  
    <v-responsive :aspect-ratio="16/6"  class="d-flex justify-center align-center hero-section">
      <v-container no-gutters="true" >     
       <v-row>
        <v-col class="d-none d-xs-none d-sm-none d-md-none d-lg-flex d-xl-flex" lg="1" xl="2" ></v-col>
        <v-col lg="5" xl="5" sm="12" md="5" xs="12" >
          <span class="isseiHeadline">
            3 MESES DE ACOMPANHAMENTO PARA DESENVOLVER O SEU POSICIONAMENTO COMO GERENTE DE PROJETOS DE LANÇAMENTOS DIGITAIS E ESCALAR OS SEUS SERVIÇOS
          </span>
          <span class="d-flex mt-5 justify-space-around align-center">
            Eu, Talita Issei, vou trabalhar pessoalmente ao seu lado para ajudá-la a construir seu Posicionamento como Gerente de Projetos e implementar todas as estratégias que testei para elevar seu faturamento ao próximo nível.
          </span>
        </v-col>
       </v-row>
       <v-row class="d-flex justify-center">
            <v-btn id="chamarWhatsApp" class="mr-4" color="#25d366" @click="openWhats" rounded width="350" height="50" style="color:#FFFFFF;font-size: 19px !important;"><v-icon left>mdi-whatsapp</v-icon>FALE COMIGO</v-btn>
       </v-row>
    </v-container>
    </v-responsive>
    <v-row no-gutters="true" class="d-none d-xl-none d-lg-none d-md-none d-sm-none d-sm-flex d-xs-flex" >
        <v-img cover src="/fundo/2560-x-700-H03-centro.png" height="300" ></v-img>
      </v-row>

    
    <v-responsive class="d-flex justify-center align-center sessao" >
    <v-container>
      <v-row class="d-flex justify-center text-center align-center titulos">
        MENTORIA PARA GERENTE DE PROJETOS
        </v-row>
        <v-row class="d-flex justify-center text-center align-center titulos mt-10">
        É PARA QUEM:  
        </v-row>
        <v-row class="d-flex justify-center align-center pt-5">
            <v-card class="ma-2 rounded-xl" width="300" height="250"  v-for="(item, i) in praquem.items" :key="i">
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around">
                    <v-img :src="item.imagem" width="67" height="58"></v-img>
                    <p v-html="item.descricao" class="mt-5"></p>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
  </v-responsive> 

  <v-responsive class="d-flex justify-center align-center">
    <v-container>
        <v-row  class="d-flex justify-end">
                   
          <v-col class="d-flex align-center justify-center" sm="12" lg="4" xs="12" cols="12">
            <v-row class="fill-height d-flex flex-column justify-center align-center justify-space-between justify-space-around">
              <v-row class="">
                <span class="d-flex align-center text-center ">
                  Minha trajetória inclui mais de 20 lançamentos digitais de destaque, nos quais atuei como Gerente de Projetos. Essas experiências me permitiram desenvolver uma metodologia única e robusta.
                </span>
              </v-row>
              <v-row><p class="mt-4 text-center ">
                Na mentoria, você terá acesso a conteúdo prático e relevante, baseado em desafios reais de grandes projetos, garantindo aplicabilidade imediata. Além disso, a mentoria é customizada para suas necessidades. Começamos com um diagnóstico detalhado para alinhar seus objetivos e seguimos com sessões focadas em suas áreas de desafios, tudo dentro de uma metodologia consolidada e eficiente. 
                </p></v-row>
            </v-row>
          </v-col>
          <v-col class="d-flex align-center justify-center" sm="12" lg="4" xs="12" cols="12">
            <v-img src="fotos/IMG_3398.jpg" width="500" height="500" contain></v-img>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="370" height="50" 
            style="color:#FFFFFF;font-size: 21px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
          </v-btn>
        </v-row>
    </v-container>
  </v-responsive>

  <v-responsive class="d-flex justify-center align-center sessao">
    <v-container >
      <v-row class="d-flex justify-center align-center mb-10 mt-10">
        <span class="font-weight-black text-center titulos">PILARES DA MENTORIA</span>
      </v-row>
      <v-row justify="center" align-content="center" v-if="entregaveis.items.length > 1" class="d-flex flex pa-0">
        <v-col v-for="(item, i) in entregaveis.items" :key="i" cols="12" lg="6" sm="6"  class="pa-0">
          <!--v-img :src="item.imagem" width="67" height="58"></v-img-->
          <v-row class="pa-0">
            <v-col cols="1" class="ml-0 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;">
            <path
              d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471"
              stroke="#0d4e1a" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#0d4e1a" stroke-width="1.86537"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </v-col><v-col class="">
            <span class="titulo-item">{{ item.titulo }}</span>
            <p v-html="item.descricao" style="padding-right: 15px;"></p>
          </v-col>
          </v-row>
        </v-col>
      </v-row>
      </v-container>
    </v-responsive>

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
              <v-card-text>"A consultoria de proceso foi um divisor de águas na minha agência. Antes estava tudo na minha cabeça e eu perdia muito tempo explicando várias e repetidas vezes pro time as tarefas.
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
  <v-responsive class="d-flex justify-center align-stretch sessao2">
    <v-container>
      <v-row class="d-flex justify-center align-center mt-10">
        <span class="font-weight-black text-center titulos">QUEM É TALITA ISSEI</span>
      </v-row>
      <v-row class="d-flex flex-row flex-wrap align-center">        
        <v-col xs="12" sm="12" lg="6" class="d-flex justify-center">
          <v-img contain src="/fotos/IMG_3625.jpg" max-height="549" max-width="366" ></v-img>
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

 .isseiHeadline{
    color:#000;
    font-weight:bold;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead{
    height: 1000px;
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
    height: 600px;
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
  .fotoTalitaHead{
    height: 800px;
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
  .fotoTalitaHead{
    height: 1000px;
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
          imagem: "https://issei.imgix.net/talita/pensamento.png?auto=compress&auto=enhance&w=67&h=58",
          descricao: "Sente dificuldade de se Posicionar como Gerente de Projetos."
        },
        {
          imagem: "https://issei.imgix.net/talita/quebra-cabeca.png?auto=compress&auto=enhance&w=67&h=58",
          descricao: "Sente falta de confiança ou habilidades para gerenciar lançamentos digitais de grande escala."
        },
        {
          imagem: "https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",
          descricao: "Deseja atrair clientes que reconheçam o valor de seus serviços e estejam dispostos a pagar mais."
        },
        {
          imagem: "https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",
          descricao: "Está buscando aumentar seu faturamento e levar sua carreira a um novo patamar financeiro."
        },
        {
          imagem: "https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",
          descricao: "Já é uma profissional que tem experiência com projetos menores, mas que aspira a liderar projetos mais significativos e complexos."
        }
      ]
      },
      entregaveis:{
        items: [
          {
          titulo: "Posicionamento Estratégico no Mercado Digital",
          descricao: "Imagine-se atraindo clientes de alto perfil, aqueles que realmente valorizam o seu trabalho e estão dispostos a investir no que você oferece. A mentoria vai equipá-la com estratégias comprovadas para não apenas atrair, mas também reter clientes que são a chave para o crescimento e sustentabilidade do seu negócio."
        },
        {
          titulo: "Descubra a Liderança que Inspira",
          descricao: "Aprenda a arte da gestão de equipes no ambiente digital. Imagine liderar um time que não apenas atende às expectativas, mas as supera, impulsionado pela sua habilidade de inspirar, motivar e orientar. Com a mentoria, você desenvolverá competências essenciais para transformar qualquer grupo de profissionais em uma equipe de alto desempenho, unida em prol do sucesso dos projetos."
        },
        {
          titulo: "Domine a Arte da Gestão de Projetos Digitais:",
          descricao: "Saia da mentoria não apenas como uma gerente de projetos, mas como uma mestre na arte de planejar, organizar e monitorar projetos digitais com eficiência impecável. Visualize-se conduzindo projetos que não apenas atingem, mas superam as metas, estabelecendo novos padrões de excelência no mercado digital."
        },
        {
          titulo: "Padronização que Eleva a Eficiência:",
          descricao: "Integre processos padronizados e replicáveis que serão a espinha dorsal da sua eficácia operacional. Após a mentoria, você terá a habilidade de criar estruturas que não apenas simplificam o trabalho diário, mas garantem resultados consistentes e de alta qualidade, elevando sua reputação no mercado."
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