<template>

  <v-main style="padding: 0px 0px 0px 0px;background-color: #020202;">
 
    <!--HEAD-->
    <v-responsive :aspect-ratio="16 / 6" class="d-flex justify-center align-center px-5"
      style="background-color: #020202; color: #FFFFFF">
      <v-container>
        <v-row class="mt-2">
          <span style="color:#ffbd59;font-size: 19px !important;"></span>
        </v-row>
        <v-row class="mt-2">
          <span class="mt-5 isseiHeadline">VOCÊ TEM
            DIFICULDADES PARA ORGANIZAR E SE SENTE SOBRECARREGADO POR TER QUE COBRAR AS TAREFAS DO SEU TIME NOS
            LANÇAMENTOS?
          </span>
          <span class="d-flex mt-5 justify-space-around align-center"
            style="color:#ffbd59;font-size: 19px !important;">Muitos lançamentos não dão certos por falta de
            planejamento e acompanhamento. <br />Como Gestora de Projetos Estrategista vou organizar o lançamento e
            garantir que as entregas sejam finalizadas dentro do prazo.</span>
        </v-row>
      </v-container>
    </v-responsive>

    <v-responsive :aspect-ratio="16 / 3" class="d-flex justify-center "
      style="background-color: #020202; color: #FFFFFF">
     
      <v-row justify="center" class="justify-space-around ma-10">
        <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"
          style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
        </v-btn>
      </v-row>
     
    </v-responsive>
    <!--O que-->
    <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center px-5"
      style="background-color: #020202; color: #FFFFFF">
      <v-container>

        <v-row>
          <v-lazy>
              <v-col class="d-flex justify-space-around align-center px-5">
                <video width="100%" height="300" autoplay="autoplay" loop muted>
                  <source src="https://issei.com.br/agil.mp4" type="video/mp4" />
                </video>
              </v-col>
          </v-lazy>
          <v-col>
            <v-row class="align-center">
              <span style="color:#ffbd59;font-size: 19px !important;">GESTOR DE PROJETOS ESTRATEGISTA</span>
            </v-row>
            <v-row class="pt-5">
              <span class="" style="color:#FFFFFF;font-size: 19px !important;" >O meu papel
                como Gestora de Projetos Estrategista é organizar, garantir que as entregas de cada fase do lançamento
                sejam conduzidas e finalizadas dentro do cronograma previsto.</span>
            </v-row>
            <v-row><p class="d-flex mt-5 justify-space-around align-center">Com o
                lançamento organizado a produtividade do seu time irá aumentar e você terá mais tempo para focar nas
                estratégias.</p></v-row>
          </v-col>
 

        </v-row>
      </v-container>
    </v-responsive>
    <v-responsive :aspect-ratio="16 / 2" class="d-flex justify-center "
      style="background-color: #020202; color: #FFFFFF">
      <v-row justify="center" class="justify-space-around ma-10">
        <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"
          style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
        </v-btn>
      </v-row>
    </v-responsive>
    <!--Como-->
    <v-responsive :aspect-ratio="16 / 7" class="d-flex justify-center align-center pa-5"
      style="background-color: #020202; color: #FFFFFF">
      <v-container>
      <v-row class="d-flex justify-center align-center mb-10">
        <span style="color:#ffffff;font-size: 21px !important;">COMO FUNCIONA O MEU SERVIÇO:</span>
      </v-row>
      <v-row justify="center" align-content="center" v-if="conteudos.items.length > 1" class="d-flex flex">
        <v-col v-for="(item, i) in conteudos.items" :key="i" cols="12" lg="4" sm="5">
          <!--v-img :src="item.imagem" width="67" height="58"></v-img-->
          <v-row>
            <v-col cols="1">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;">
            <path
              d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471"
              stroke="#ffbd59" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#ffbd59" stroke-width="1.86537"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
</v-col>
<v-col>
          <div width="100%" class="pl-3 justify-space-around">
            <span class="font-weight-black" style="color:#ffbd59;">{{ item.titulo }}</span>
            <p v-html="item.descricao"></p>
          </div>
          </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="justify-space-around ma-10">
        <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"
          style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
        </v-btn>
      </v-row>
      </v-container>
    </v-responsive>
    <!-- BIO -->
    <v-responsive :aspect-ratio="16 / 6" style="background: #020202; color: #FFFFFF;"
      class="d-flex justify-center align-center px-5">
      <v-container>
        <v-row class="d-flex flex-row flex-wrap justify-center align-center">
          <!--v-avatar  width="400" height="400"-->
          <v-img contain src="https://issei.com.br/talita.jpg" lazy width="400" height="516"></v-img>
          <!--/v-avatar-->
          <v-responsive width="60%" min-width="350"
            class="d-flex justify-space-around align-center mx-5 pt-5">
            <p>Olá, muito prazer sou Talita Issei.</p>
            <p>Possuo 13 anos de experiência em Consultorias, sendo quase 5 anos focada em Gestão de Projetos e de Equipes.</p>
            <p>Estou no Marketing Digital há um ano.<BR/>Participei do Bootcamp da Escola Estado da Arte, onde acompanhei 6 lançamentos de ponta a ponta de nichos diferentes. Esse ano realizei dois lançamentos no nicho de Nutrição.</p>
            <p>Principais cursos e mentorias relacionados ao MKT Digital:<ul><li>Estrategista Digital - Leandro
              Aguiari</li><li>Storytelling Marketing - Leandro Aguiari</li><li>Aluna do O Novo Mercado - Ícaro de
              Carvalho</li><li>Aluna do Conversão Extrema - Tiago Tessmann</li><li>Mentorada Altitude - Tiago Tessmann</li></ul></p>
          </v-responsive>
        </v-row>
        <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"
            style="color:#FFFFFF;font-size: 14px !important;">ME CHAME NO WHATSAPP <v-icon right>mdi-whatsapp</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-responsive>

    <!-- FAQS -->
    <v-responsive :aspect-ratio="16 / 7" class="d-flex justify-center align-center mx-5" style="background: #020202;">
      <v-container>
        <v-row justify="center">
          <span style="color:#ffbd59;font-size: 21px !important;">DÚVIDAS FREQUENTES</span>
        </v-row>
        <v-row justify="center" class="my-10">
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in perguntas" :key="i">
              <v-expansion-panel-header class="d-flex justify-center justify-space-around align-center"
                disable-icon-rotate>
                <template v-slot:actions>
                  <v-icon class="icon">
                    mdi-plus-thick
                  </v-icon>
                </template>
                <p style="font-size: 14px !important;font-weight:bold;">{{item.pergunta}}</p>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="ma-5" style="font-size: 14px !important;">{{item.resposta}}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row align="center" justify="center" class="justify-space-around mt-10 mb-10">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"
            style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right>mdi-whatsapp</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-responsive>

   
    <v-bottom-sheet v-model="snackbar" persistent class="text-center">
      <v-sheet>
        <v-container>
          <v-row class="d-flex">
            <v-col justify-center>
              Ao clicar em "Aceito", concorda com o armazenamento de cookies no seu dispositivo para melhorar a
              navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing. Para mais
              informações,
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
 .isseiHeadline{
    color:#FFFFFF;
    font-weight:bold;
    line-height: 1.2 !important;
  }
 @media only screen and (max-width: 600px) {
  .isseiHeadline{
    font-size: 26px !important;
  }
}
@media only screen and (min-width: 600px) {
  .isseiHeadline{
    font-size: 42px !important;
  }
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
                pergunta: "Qual a diferença de um estrategista e um gestor de projetos estrategista?",
                resposta: "O meu papel é pegar as estratégias traçadas pelo estrategista, organizar todo o cronograma e fazer o lançamento acontecer."
              },
              {
                pergunta: "Sou estrategista, por que eu deveria contratar um gestor de projetos?",
                resposta: "Se você está crescendo, assumindo novos especialistas ao mesmo tempo, torna-se insustentável para uma única pessoa assumir toda a responsabilidade. O meu papel é organizar e acompanhar todas as atividades e garantir que as entregas sejam feitas dentro do prazo."
              },
              {
                pergunta: "Como saber se eu preciso de um gestor de projetos estrategista?",
                resposta: "Se você tem dificuldades de organizar e delegar tarefas, está sobrecarregado de resolver tudo sozinho no lançamento e precisa focar nas estratégias, como Gestora de Projetos estrategista, eu consigo te ajudar."
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
            conteudos: {
              items: [
                {
                titulo: "BRIEFING",
                descricao: "A partir desse contato inicial, é recebido o briefing do projeto e serão discutidas as primeiras iniciativas relacionadas à condução do lançamento"
              },
              {
                titulo: "DEFINIÇÃO DE OBJETIVOS",
                descricao: "Organizarei o cronograma do lançamento com metas claras e atingíveis para cada etapa do projeto."
              },
              {
                titulo: "DELEGAR ATIVIDADES",
                descricao: "Após o levantamento do time necessário para atender a demanda do lançamento, organizarei as atividades de cada responsável na ferramenta Trello."
              },
              {
                titulo: "PRIORIZAÇÃO",
                descricao: "Com base nas estratégias, estabelecerei o nível de prioridade adequado para cada etapa do processo."
              },
              {
                titulo: "REUNIÕES DE STATUS",
                descricao: "Realizarei reuniões periódicas com a equipe. Nelas, avaliarei se as etapas estão prosseguindo conforme o cronograma e conter possíveis problemas antes que impactem a entrega."
              },
              {
                titulo: "ACOMPANHAMENTO DA ENTREGA",
                descricao: "Uma etapa bastante decisiva para o processo é o monitoramento da evolução das entregas, que significa garantir que tudo está sendo realizado dentro do cronograma e agir em função de possíveis atrasos."
              },
            ],
            },
    };
  },
};

</script>