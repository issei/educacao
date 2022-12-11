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
          <v-col lg="6" md="12" sm="12" xs="12" class="mt-2">
            <h3 class="text-h5  text-center text-lg-left font-weight-black">
              QUER LANÇAR UM CURSO ON-LINE E NÃO SABE POR ONDE COMEÇAR?
            </h3>
            <h4 class="text-h6 subtitle-1 text-center text-lg-left"><span class="font-weight-bold" style="color:#cda09b;">Baixe o ebook grátis e descubra 10 dicas para você lançar o seu produto</span></h4>
            
          </v-col>
          <v-col lg="6" md="12" sm="12" xs="12">
            <v-form v-model="valid" ref="form" id="formulario">
              <v-hover v-slot="{ hover }">
                <v-card full-width color="#FFFFFF" :elevation="hover ? 16 : 2" class="pb-2">
                      
                    <v-card-text width="100%">
                      <p style="color:#233a5a" class="font-weight-bold text-center justify-center subtitle-2">Preencha seus dados para baixar o Material Gratuito</p>
                      <span style="color:#233a5a" class="font-weight-bold">* Qual seu melhor email?</span>
                        <v-text-field 
                                v-model="email"
                                :rules="emailRules"
                                outlined
                                color="#000000"
                                filled
                                required
                                dense
                                background-color="white"
                        >
                        <template v-slot:label>
                          
                        </template>
                        </v-text-field>
                        <span style="color:#233a5a" class="font-weight-bold">* Nome</span>
                        <v-text-field 
                                v-model="nome"
                                :rules="nameRules"
                                outlined
                                filled
                                color="#000000"
                                required
                                dense
                                background-color="white"
                        ><template v-slot:label>
                          
                        </template>
                        </v-text-field>
                        <span style="color:#233a5a" class="font-weight-bold">* Me conta aqui quais são as suas maiores dificuldades para lançar o seu curso on-line?</span>
                        <v-text-field
                            v-model="dificuldades"
                            :rules="[v => !!v || 'Informe']"
                            outlined
                            required
                            filled
                            color="#000000"
                            dense
                            background-color="white"
                        ><template v-slot:label>
                          
                        </template>
                        </v-text-field>
                        <span style="color:#233a5a" class="font-weight-bold">* Qual o seu maior desejo em lançar um produto digital?</span>
                        <v-text-field
                            v-model="desejo"
                            :rules="[v => !!v || 'Informe']"
                            outlined
                            required
                            filled
                            color="#000000"
                            dense
                            background-color="white"
                        ><template v-slot:label>
                          
                        </template>
                        </v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center"><v-btn @click="getEbook" color="#d9a7ab" style="color:#FFFFFF;" rounded width="300" height="50">QUERO MEU E-BOOK GRÁTIS!</v-btn></v-card-actions>
                </v-card>
                </v-hover>
            </v-form>
          </v-col>
        </v-row>
         
      </v-container>
    </v-responsive>
    <!--HEAD-->
    <v-responsive
    :aspect-ratio="16 / 5"
    style="background: #233a5a; color: #ffffff;"
    class="d-flex justify-center justify-space-around align-center py-5 px-10">
      <v-container>
        <v-row class="d-flex justify-center justify-space-around align-center py-10">
          <span class="headline font-weight-bold text-center" style="color:#cda09b">Você se sente perdido na hora de lançar o seu curso?</span>
        </v-row>
        <v-row class="d-flex justify-center justify-space-around align-center" style="color: #ffffff;">
          <p class="text-h6 text-center">Eu sei que isso pode complicar quando você é sozinho e não tem com quem dividir as responsabilidades.</p>
<p class="text-h6 text-center">Pensando em te ajudar e fazer a sua jornada mais leve, eu reuni 10 dicas para você tirar essa ideia do papel.</p>
        </v-row>
        <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn @click="$vuetify.goTo('#formulario')" color="#f2f2f2" style="color:#233a5a;" rounded width="300" height="50">QUERO O MEU E-BOOK GRÁTIS!</v-btn>
        </v-row>
      </v-container>
    </v-responsive>
    <!-- BIO -->
    
    <!--style="background: #ede0e1; color: #5d1916;"-->
    <v-responsive
    :aspect-ratio="16 / 5"
    style="background: #FFFFFF; color: #233a5a;"
    class="d-flex justify-center align-center py-5 px-5">
    <v-container>
            <v-row class="d-flex flex-row flex-wrap justify-center align-center" >
              <!--v-avatar  width="400" height="400"-->
                <v-img contain src="https://issei.com.br/talita2.png" eager width="400" height="400"></v-img>
              <!--/v-avatar-->
                <v-responsive width="50%" min-width="350" class="d-flex justify-space-around align-center mx-5 pt-5 text-justify" >
                <p>Olá, muito prazer sou Talita Issei.</p>
                <p>Trabalho no segmento de Consultoria há mais de 10 anos, antes de entrar para o mundo digital, era responsável pelo gerenciamento de projetos e de times.</p>
                <p>Iniciei no Marketing digital em 2021. Estudei MUITO, mas não fiquei só na teoria, tudo que eu estudava, eu aplicava! Peguei os meus primeiros projetos e percebi que o grande problema das pessoas que queriam lançar um curso digital, era não saber por onde começar, por isso, reuni 10 passos para você iniciar hoje o seu projeto.</p>
                </v-responsive>
            </v-row>
            <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn @click="$vuetify.goTo('#formulario')" color="#f2f2f2" style="color:#000000;" rounded width="300" height="50">QUERO O MEU E-BOOK GRÁTIS!</v-btn>
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
          this.$fbq('track', 'Subscribe', {currency: "BRL", value: 1.00});
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
                console.log(response);
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
    },
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'E-mail precisa ser válido',
      ],
      nome: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => v.length >= 4 || 'Nome deve ter pelo menos 4 caracteres',
      ],
      dificuldades: '',
      desejo: '',
    };
  },
};

</script>