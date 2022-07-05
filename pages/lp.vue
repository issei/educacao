<template>
<v-main >
    <!--HEAD-->
    <v-responsive
      :aspect-ratio="16 / 6"
      class="d-flex justify-center align-center pb-3 px-2"
      style="background-color: #233a5a; color: #FFFFFF"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
          class="justify-space-around"
          style=""
        >
          <v-col lg="12" md="12" sm="12" xs="12" class="mt-2 text-center">
            <h3 class="text-h3  text-center" style="font-family: 'Poppins', sans-serif !important;">
              Você quer criar um curso digital e não sabe por onde começar?
            </h3>
            <h5 class="text-h5 subtitle-1 text-center mt-10 mb-10"><span  style="color:#cda09b;font-family: 'Poppins', sans-serif !important;">Consultoria: Do zero ao produto pronto para lançar é o caminho para quem deseja construir e escalar o seu produto digital</span></h5>
            
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="justify-space-around mb-10">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right >mdi-whatsapp</v-icon></v-btn>
        </v-row>
         
      </v-container>
    </v-responsive>
    <!--HEAD-->
    <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center pa-2"
    style="background-color: #233a5a; color: #FFFFFF; " z-index="1"
  >
    <v-container >
      <h1 class="d-flex justify-center align-center headline font-weight-black" style="font-weight:bold;">A CONSULTORIA  É PARA VOCÊ QUE...</h1>
      <v-row class="d-flex justify-center my-10 ">
        <v-col class="d-flex align-stretch flex-column justify-center align-center pb-1">
          <v-col v-for="(item, i) in listacheck" :key="i" class="d-flex flex-row">
            <v-icon large class="mr-5"  style="color: #FFFFFF;">mdi-check</v-icon>
            <p v-html="item.texto"></p>
          </v-col>
        </v-col>
      </v-row>
      <v-row justify="center" class="mb-10">
        <v-btn id="chamarWhatsApp2" color="#25d366" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right >mdi-whatsapp</v-icon></v-btn>
      </v-row>
    </v-container>
  </v-responsive>

  <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center pt-10 pb-10" style="background: #233a5a; color: #FFFFFF;">
    <v-container>
      <h1 class="d-flex justify-center align-center headline" style="font-weight:bold;">O QUE É A CONSULTORIA?</h1>
        <v-row class="d-flex justify-center align-center my-5">
            <h1 class="d-flex justify-center align-center headline"  style="color: black">
                
            </h1>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-card class="ma-2 rounded-xl " width="350" height="350" v-for="(item, i) in cards" :key="i" style="background: #233a5a;border: 1px solid #cda09b;" outlined shaped tile >
                <v-card-text class="d-flex flex-column justify-center align-center justify-space-between justify-space-around ">
                    <p v-html="item.titulo" class="mt-5 text-center" style="font-weight:bold;color:#FFFFFF"></p>
                    <p v-html="item.texto" class="mt-5 text-center" style="color:#FFFFFF"></p>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
  </v-responsive>

  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center pa-2"
    style="background-color: #233a5a; color: #FFFFFF; " z-index="1"
  >
    <v-container >
      <h1 class="d-flex justify-center align-center headline font-weight-black">COMO FUNCIONA A CONSULTORIA ?  </h1>
      <v-row class="d-flex justify-center my-10 ">
        <v-col class="d-flex align-stretch flex-column justify-center align-center pb-1 border">
          <v-col v-for="(item, i) in como" :key="i" class="d-flex flex-row mt-5" style="border: 1px solid #cda09b;">  
            <v-icon large class="mr-5" style="color: #FFFFFF;">mdi-check</v-icon>
            <p v-html="item.texto"></p>
          </v-col>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-1">
        <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50"  style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right >mdi-whatsapp</v-icon></v-btn>
      </v-row>
    </v-container>
  </v-responsive>

    <!-- BIO -->
        <!--style="background: #ede0e1; color: #5d1916;"-->
    <v-responsive
    :aspect-ratio="16 / 5"
    style="background: #233a5a; color: #FFFFFF;"
    class="d-flex justify-center align-center py-5 px-5">
    <v-container>
            <v-row class="d-flex flex-row flex-wrap justify-center align-center" >
              <!--v-avatar  width="400" height="400"-->
                <v-img contain src="https://issei.com.br/talita.png" lazy width="400" height="400"></v-img>
              <!--/v-avatar-->
                <v-responsive width="50%" min-width="350" class="d-flex justify-space-around align-center mx-5 pt-5 text-justify" >
                <p>Olá, muito prazer sou Talita Issei.</p>
                <p>Trabalho no segmento de Consultoria há mais de 10 anos, antes de entrar para o mundo digital, era responsável pelo gerenciamento de projetos e de times.</p>
                <p>Iniciei no Marketing digital em 2021. Estudei MUITO, mas não fiquei só na teoria, tudo que eu estudava, eu aplicava! Peguei os meus primeiros projetos e percebi que o grande problema das pessoas que queriam lançar um curso digital, era um passo antes, a falta de estratégia e direcionamento na preparação para o lançamento. Com isso, criei a Consultoria. Quero te ajudar a analisar a sua audiência, estruturar o seu produto e criar estratégias de comunicação para você vender o seu curso on-line.</p>
                </v-responsive>
            </v-row>
            <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn id="chamarWhatsApp" color="#25d366" @click="openWhats" rounded width="300" height="50" style="color:#FFFFFF;">VAMOS CONVERSAR <v-icon right >mdi-whatsapp</v-icon></v-btn>
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
          titulo:"Análise da audiência",
          texto:"A consultoria começa analisando a sua audiência e público comprador através de pesquisas."
        },
        {
          titulo:"Construção do seu Produto",
          texto:"Definiremos as melhores estratégias para estruturar o seu curso on-line"
        },
        {
          titulo:"Comunicação para vender",
          texto:"Após termos decidido a melhor estratégia alinhada ao seu negócio,  iniciaremos a estruturação da sua linha editorial focada na comunicação para vender o seu curso"
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