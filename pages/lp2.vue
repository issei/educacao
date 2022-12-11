<template>
<v-main style="padding: 0px 0px 0px;">
    <!--HEAD-->
    <v-responsive
      :aspect-ratio="16 / 6"
      class="d-flex justify-center align-center px-5"
      style="background-color: #020202; color: #FFFFFF"
    >
      <v-container>
        <v-row class="mt-2">
          <span  style="color:#ffbd59;font-size: 19px !important;">GESTORA DE PROJETO ESTRATEGISTA</span>
        </v-row>
        <v-row class="mt-2">
            <span class="mt-5" style="color:#FFFFFF;font-size: 32px !important;line-height: 1.2 !important;">VOCÊ QUER LANÇAR UM CURSO ON-LINE, MAS TEM DIFICULDADES PARA ORGANIZAR E ESTRURAR O LANÇAMENTO?
            </span>
            <span class="d-flex mt-5 justify-space-around align-center"  style="color:#ffbd59;font-size: 19px !important;">Muitos lançamentos não dão certos por falta de estratégias, planejamento e acompanhamento. <br/>Como Gestora de Projetos Estrategista vou executar e definir as melhores estratégias para o seu lançamento.</span>
        </v-row>
        
      </v-container>
        <v-row align="center" justify="center" class="justify-space-around ma-10">
          <v-btn id="chamarWhatsApp" color="#ffbd59" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right >mdi-whatsapp</v-icon></v-btn>
        </v-row>
         
    </v-responsive>    
    <!--HEAD-->
    
    <v-responsive
      :aspect-ratio="16 / 6"
      class="d-flex justify-center align-center px-5"
      style="background-color: #020202; color: #FFFFFF"
    >
      <v-container>
        <v-row>
          <span  style="color:#ffffff;font-size: 21px !important;">POR QUE VOCÊ PRECISA DE UM <span  style="color:#ffbd59;">GESTOR DE PROJETOS ESTRATEGISTA</span> NO SEU LANÇAMENTO?</span>
        </v-row>
        <v-row class="d-flex flex-column text-justify justify-space-around  mt-10">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Para organizar e estruturar o seu lançamento</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Definir papéis e responsabilidades</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Controlar e cobrar os prazos do time envolvido</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Definir as estratégias do seu lançamento</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Auxiliar na construção da sua linha editorial</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Apoiar na construção do seu produto digital</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Construir a narrativa de vendas do seu produto</p>
        </v-row>
        <v-row align="center" justify="center" class="justify-space-around mt-10">
          <v-btn id="chamarWhatsApp" color="#ffbd59" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right >mdi-whatsapp</v-icon></v-btn>
        </v-row>
         
      </v-container>
    </v-responsive>

  <v-responsive :aspect-ratio="16 / 5" 
    class="d-flex justify-center align-center pt-10 px-5" 
    style="background: #020202; color: #FFFFFF;">
    <v-container>
      <v-row class="d-flex justify-center align-center mb-10">
          <span  style="color:#ffffff;font-size: 21px !important;">COMO FUNCIONAM AS ETAPAS DO LANÇAMENTO:</span>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-card class="ma-2 rounded-xl " width="350" height="400" v-for="(item, i) in cards" :key="i" style="background: #020202;border: 1px solid #ffbd59;" outlined shaped tile >
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around ">
                    <p v-html="item.titulo" class="mt-5 text-center" style="font-weight:bold;color:#FFFFFF;font-size: 20px !important;"></p>
                    <p v-html="item.texto" class="mt-5 text-justify" style="color:#FFFFFF"></p>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row align="center" justify="center" class="justify-space-around ma-10">
          <v-btn id="chamarWhatsApp" color="#ffbd59" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right >mdi-whatsapp</v-icon></v-btn>
        </v-row>
    </v-container>
  </v-responsive>

      <!-- BIO -->
    <v-responsive
    :aspect-ratio="16 / 5"
    style="background: #020202; color: #FFFFFF;"
    class="d-flex justify-center align-center px-5">
    <v-container>
            <v-row class="d-flex flex-row flex-wrap justify-center align-center" >
              <!--v-avatar  width="400" height="400"-->
                <v-img contain src="https://issei.com.br/talita.jpg" lazy width="400" height="516"></v-img>
              <!--/v-avatar-->
                <v-responsive width="60%" min-width="350" class="d-flex justify-space-around align-center mx-5 pt-5 text-justify" >
                <p>Olá, muito prazer sou Talita Issei.</p>
                <p>Trabalho no segmento de Consultoria há mais de 13 anos, antes de entrar para o mundo digital, era responsável pelo gerenciamento de projetos e de times.</p>
                <p>Principais cursos e mentorias relacionados ao MKT Digital:<BR />Estrategista Digital - Leandro Aguiari<BR />Storytelling Marketing - Leandro Aguiari<BR />Aluna do O Novo Mercado - Ícaro de Carvalho<BR />Aluna do Conversão Extrema - Tiago Tessmann<BR />Mentorada Altitude - Tiago Tessmann</p>
                <p>Ano passado, participei do Bootcamp da Escola Estado da Arte, onde acompanhei 6 lançamentos de ponta a ponta de nichos diferentes.</p>
                <p>Em 2021 fiz 2 lançamentos no nicho de Nutrição.</p>
                </v-responsive>
            </v-row>
            <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn id="chamarWhatsApp" color="#ffbd59" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right >mdi-whatsapp</v-icon></v-btn>
        </v-row>
    </v-container>
  </v-responsive> 

<!-- FAQS -->
  <v-responsive
    :aspect-ratio="16 / 5"
    class="d-flex justify-center align-center px-2"
    style="background: #020202;"
  >
    <v-container>
    <v-row justify="center">
        <span  style="color:#ffbd59;font-size: 21px !important;">DÚVIDAS FREQUENTES</span>
    </v-row>
    <v-row justify="center" class="my-10">
    <v-expansion-panels  focusable>
      <v-expansion-panel
        v-for="(item,i) in perguntas"
        :key="i"
      >        
        <v-expansion-panel-header class="d-flex justify-center justify-space-around align-center" disable-icon-rotate>
          <template v-slot:actions>
            <v-icon class="icon">
              mdi-plus-thick
            </v-icon>
          </template>
          <p>{{item.pergunta}}</p>
          </v-expansion-panel-header>
        <v-expansion-panel-content>
            <p class="ma-5">{{item.resposta}}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
  <v-row align="center" justify="center" class="justify-space-around mt-10 mb-10">
    <v-btn id="chamarWhatsApp" color="#ffbd59" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right >mdi-whatsapp</v-icon></v-btn>
  </v-row>
  </v-container>
  </v-responsive>  


  <v-bottom-sheet
      v-model="snackbar"
      persistent
      class="text-center"
    >
      <v-sheet>
        <v-container>
          <v-row class="d-flex">
            <v-col justify-center>
              Ao clicar em "Aceito", concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing. Para mais informações,
              você pode visitar a nossa
              <NuxtLink to="/politica-de-privacidade">Política de privacidade</NuxtLink>
            </v-col>
          </v-row>
          <v-row class="d-flex">
            <v-col class="d-flex justify-end align-center mx-10 mb-5">
              <v-btn color="green" @click="confirm()">
                Aceito
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
</v-main>
</template>
<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
 }
</style>
<script>

export default {
  mounted() {    
  },
  computed: {
    snackbar (){
      this.$store.commit('optIn/get'); 
      return this.$store.state.optIn.optIn;
    },
  },
  methods: {
     confirm () {
      this.$store.commit('optIn/accept');      
    },
      getEbook () {
        this.$refs.form.validate();
        if(this.valid){
          this.submit();
        }
      },
      async submit() {
        this.$nuxt.$loading.start();
          this.$gtag('event', 'Lead', { "email": this.email});
          this.$axios.$post(
              "https://api.issei.com.br/lead/ebook",
              {
                email: this.email,
                nome: this.nome,
                dificuldades: this.dificuldades,
                desejo: this.desejo,
                origin: "issei.com.br"
              },
              {}
            )
            .then((result) => {
              console.log(result);
              this.$axios.get('https://issei.com.br/h9doc7nbgi2ug6im4y3l4jj0ltxxmv.pdf', { responseType: 'blob' })
              .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'EBook 10 ESTRATÉGIAS LANÇAMENTO';
                link.click();
                URL.revokeObjectURL(link.href);
                this.loading = false;
                this.$nuxt.$loading.finish();
                this.$gtag('event', 'download', { "email": this.email});
                //this.$router.push("/agradecimento");
              }).catch(console.error);
            });
        },
        async openWhats() {
          this.$nuxt.$loading.start();
            this.loading = true;
            this.$gtag('event', 'ContatoWhats');
            this.$fbq('track', 'Contact', {currency: "BRL", value: 1.00});
            this.loading = false;
            this.$nuxt.$loading.finish();
            window.open('https://wa.me/5511985043045', '_blank','menubar=no,toolbar=no,location=no');
        }
    },
  data() {
    return {
      valid: false,
      loading: false,
      listacheck: [
        {texto:"Quer vender curso on-line pelo Instagram e não sabe por onde começar;"},
        {texto:"Tem pouco conhecimento no Marketing Digital;"},
        {texto:"Precisa de direcionamento com processos e estratégias;"},
        {texto:"Tem um grande conhecimento em um determinado assunto, mas não sabe como aproveitar ele para criar um produto (curso digital);"},
      ],
      como: [
        {texto:"É composta por 4 encontros durante 4 semanas consecutivas;"},
        {texto:"Tem pouco conhecimento no Marketing Digital;"},
        {texto:"Precisa de direcionamento com processos e estratégias;"},
        {texto:"Tem um grande conhecimento em um determinado assunto, mas não sabe como aproveitar ele para criar um produto (curso digital);"},
      ],
      cards: [
        {
          titulo:"ESTRATÉGIAS DO <br/>LANÇAMENTO",
          texto:"Na primeira etapa, vamos fazer todo o levantamento das informações para estruturar o lançamento. Vamos definir as estratégias, escolher qual formato que será utilizado, qual o time necessário para executar cada atividade e mapear os entregáveis do lançamento."
        },
        {
          titulo:"ESTRUTURA DO <br/>LANÇAMENTO",
          texto:"Nesta fase, faremos o cronograma e plano de ação para cada etapa do lançamento: Captação, Aquecimento, Evento e Abertura do carrinho. Vamos estruturar a narrativa vendas do seu produto e  organizar as atividades de cada responsável."
        },
        {
          titulo:"GESTÃO E EXECUÇÃO DO <br/>LANÇAMENTO",
          texto:"Nada adianta ter toda a estrutura pronta, se não existir  o acompanhamento das atividades, aqui vou direcionar o time e acompanhar cada fase do lançamento."
        },
      ],
      perguntas:[
              {
                pergunta: "Não tenho o curso pronto, mas quero criar, é possível?",
                resposta: "Se você tem um conhecimento e um método, consigo te ajudar a criar e estruturar o seu curso on-line."
              },
              {
                pergunta: "Em quanto tempo meu lançamento  será feito?",
                resposta: "Depende em qual estágio você está, mas o indicado é pelo menos 2 meses."
              },
              {
                pergunta: "Vou precisar de mais gente para o lançamento?",
                resposta: "Sim! Meu papel é definir todas as estratégias do lançamento e fazer a gestão do time/ projeto. Mas não se preocupe, para você saber quais profissionais serão necessários, eu consigo te direcionar, mas antes, eu preciso entender em qual estágio você está e qual o tamanho do lançamento."
              },
              {
                pergunta: "Como vou saber se o lançamento dará certo?",
                resposta: "Não posso te prometer resultados. O lançamento é um conjunto de fatores envolvidos que influenciam no resultado, é um investimento ao longo prazo, cada vez que você faz, você vai melhorando. O que eu posso te garantir é um processo estruturado  para que o lançamento seja conduzido da melhor forma."
              },
              {
                pergunta: "Quanto eu precisarei investir?",
                resposta: "O planejamento financeiro é definido e alinhado após a nossa conversa, de acordo com a sua realidade e expectativa."
              },
              {
                pergunta: "Como faço para ter mais informações?",
                resposta: "Clique no botão abaixo \"Vamos conversar\"."
              },
            ],
      modulos: {
              itens: [
                {
                    titulo: "Módulo 1",
                    imagem: "/check.png",
                    subtitulo: "Análise",
                    texto: "Vou Analisar a situação atual e o seus principais objetivos",
                    color: '#98a685',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "Módulo 2",
                    imagem: "/check.png",
                    subtitulo: "Dignóstico",
                    texto: "Será realizado um diagnóstico e definição de metas claras e alcançáveis",
                    color: '#98a685',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "Módulo 3",
                    imagem: "/check.png",
                    subtitulo: "Estratégia",
                    texto: "Te ajudarei com as melhores estratégias para a sua Audiência do Instagram",
                    color: '#98a685',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "Módulo 4",
                    imagem: "/check.png",
                    subtitulo: "Produto",
                    texto: "Vou direcionar e ajudar a estruturar o seu produto (curso on-line)",
                    color: '#98a685',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "Módulo 5",
                    imagem: "/check.png",
                    subtitulo: "Linha Editorial",
                    texto: "Você nunca mais ficará perdida na hora de postar conteúdos, criaremos uma linha editorial com estratégias de comunicação para vender o seu curso",
                    color: '#98a685',
                    icon: 'mdi-check',
                  },
              ]
            },
    };
  },
};

</script>