<template>
<v-main >
    <!--HEAD-->
    <v-responsive
      :aspect-ratio="16 / 6"
      class="d-flex justify-center align-center pb-5"
      style="background-color: #f2f2f2; color: #545d48"
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
              CANSADA DE CHEGAR EM CASA E TER QUE PENSAR NO QUE COZINHAR?
            </h3>
            <h4 class="subtitle-1 text-center text-lg-left"><span class="font-weight-bold" style="color:#545d48">DESCUBRA 10 DICAS DE COMO TORNAR A SUA COZINHA MAIS PRÁTICA E EFICIENTE</span></h4>
            
          </v-col>
          <v-col lg="6" md="12" sm="12" xs="12">
            <v-form v-model="valid" ref="form" id="formulario">
              <v-hover v-slot="{ hover }">
                <v-card full-width color="#FFFFFF" :elevation="hover ? 16 : 2" class="pb-5">
                      
                    <v-card-text width="100%">
                      <p style="color:#545d48" class="font-weight-bold text-center justify-center subtitle-2">Preencha seus dados para baixar o Material Gratuito</p>
                      <br/>
                      <span style="color:#545d48" class="font-weight-bold">* Qual seu melhor email?</span>
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
                        <span style="color:#545d48" class="font-weight-bold">* Nome</span>
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
                        <span style="color:#545d48" class="font-weight-bold">* Quais são as suas maiores dificuldades na cozinha?</span>
                        
                        <!--v-textarea
                            v-model="dificuldades"
                            :rules="[v => !!v || 'Informe']"
                            outlined
                            filled
                            auto-grow
                            required
                            rows="2"
                            row-height="15"
                            color="#000000"
                            background-color="white"
                        ><template v-slot:label>
                          
                        </template>
                        </v-textarea-->
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
                        <span style="color:#545d48" class="font-weight-bold">* Se existisse um curso que resolvesse as suas dificuldades, você compraria?</span>
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
    style="background: #98a685; color: #f2f2f2;"
    class="d-flex justify-center justify-space-around align-center py-5 px-10">
      <v-container>
        <v-row class="d-flex justify-center justify-space-around align-center py-10">
          <span class="headline font-weight-bold text-center" style="color:#545d48">Quem nunca ficou perdida na hora de preparar as refeições dos dia a dia?</span>
        </v-row>
        <v-row class="d-flex justify-center justify-space-around align-center">
          <p class="text-h6 text-justify">Eu sei que isso pode complicar quando você tem pouco tempo disponível para cozinhar. 
Pensando em te ajudar e fazer a sua jornada mais leve, eu reuni 10 dicas de como tornar a sua cozinha mais prática e eficiente.

Aproveite para utilizá-las no seu dia a dia, e acredite, se você seguir as dicas, logo vai perceber que começará a perder menos tempo na cozinha, e terá mais tempo livre pra você!</p>
        </v-row>
        <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn @click="$vuetify.goTo('#formulario')" color="#f2f2f2" style="color:#000000;" rounded width="300" height="50">QUERO O MEU E-BOOK!</v-btn>
        </v-row>
      </v-container>
    </v-responsive>
    <!-- BIO -->
    
    <!--style="background: #ede0e1; color: #5d1916;"-->
    <v-responsive
    :aspect-ratio="16 / 5"
    style="background: #d9a7ab; color: #FFFFFF;"
    class="d-flex justify-center align-center py-5 px-5">
    <v-container>
            <v-row class="d-flex flex-row flex-wrap justify-center" >
                <v-img contain src="https://issei.imgix.net/talita/Talita.png?auto=compress&auto=enhance&mask=ellipse&w=300&h=300" width="550" max-height="600" eager></v-img>
                <v-responsive width="50%" min-width="350" class="d-flex justify-space-around align-center mx-5 pt-5 text-justify" >
                <p class="text-h6" ><span STYLE="font-weight:bold">Dra. Ana Paula Montemor</span> <BR/>Nutricionista<BR/><BR/>
Acreditem: eu gostaria de poder dizer que sempre fui organizada na cozinha.
Por muito tempo me senti perdida, sem saber o que fazer para o jantar. Foi depois de ter a minha filha que uma luz acendeu: eu preciso parar de perder tempo cozinhando.
Comecei a minha jornada estudando técnicas dietéticas, cozinha funcional, e muita inspiração no mundo das receitas.
Depois de muito estudo e experiência, percebi que era a hora de ajudar outras pessoas também.  Assim nasceu o método "Cozinha Prática".
E sei que esse é só o começo! Espero ter você comigo nessa caminhada.</p>
                </v-responsive>
            </v-row>
            <v-row class="d-flex justify-center justify-space-around align-center ma-10">
          <v-btn @click="$vuetify.goTo('#formulario')" color="#f2f2f2" style="color:#000000;" rounded width="300" height="50">QUERO O MEU E-BOOK!</v-btn>
        </v-row>
    </v-container>
  </v-responsive> 
</v-main>
</template>
<script>

export default {
  mounted() {    
  },
  methods: {
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
              /*
              this.$axios.get('https://nutrianamontemor.com.br/h9doc7nbgi2ug6im4y3l4jj0ltxxmv.pdf', { responseType: 'blob' })
              .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'ebook cozinha prática';
                link.click();
                URL.revokeObjectURL(link.href);
                this.loading = false;
                this.$nuxt.$loading.finish();
                this.$router.push("/agradecimento");
              }).catch(console.error);
              */              
                this.loading = false;
                this.$nuxt.$loading.finish();
                this.$router.push("/agradecimento");
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