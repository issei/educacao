<template>
<v-main >
  <v-responsive :aspect-ratio="16/7"  class="d-flex justify-center align-center fundoConsultoriaSM d-lg-none d-xl-none">
  
  </v-responsive>
    <v-responsive :aspect-ratio="16/7"  class="d-flex justify-center align-center fundoConsultoria">
    <v-container no-gutters="true">
      <v-row class="d-lg-none" ></v-row>
    <v-row class="justify-center align-center" no-gutters="true">
      <v-col lg="1" xs="12"  sm="12"></v-col>
      <v-col lg="5" xs="12" sm="12" class="justify-end">
        <v-row align="center" justify="center">
          <v-col class="text-left" cols="12">
            <span class="isseiHeadline" v-html="headline.titulo"></span>
            <span class="d-flex mt-5 justify-space-around align-center" style="color:#7A7A7A;font-size: 19px !important;" v-html="headline.subtitulo" ></span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-row justify="center" class="mt-5">
              <BtnWhats :btnColor="headline.btnColor" class="mr-4" :texto_botao="headline.texto_botao"></BtnWhats>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col no-gutters="true" >
        <!--v-img contain src="https://issei.com.br/fotos/IMG_3664bg.png" class="fotoTalitaHead" ></v-img-->
      </v-col>
    </v-row>
    </v-container>
    </v-responsive>

    <v-responsive class="d-flex justify-center align-center sessao">
    <v-container >
      <v-row class="d-flex justify-center align-center mb-10 mt-10">
        <span class="font-weight-black titulos">Atendimento Personalizado para o Seu Sucesso</span>
      </v-row>
      <v-row justify="center" align-content="center" v-if="entregaveis.items.length > 1" class="d-flex flex pa-0">
        <v-col v-for="(item, i) in entregaveis.items" :key="i" cols="12" lg="6" sm="6"  class="pa-0">
          <!--v-img :src="item.imagem" width="67" height="58"></v-img-->
          <v-row class="pa-0">
            <v-col cols="1" class="ml-0 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;">
            <path
              d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471"
              stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </v-col>
        <v-col class="">
            <span class="titulo-item">{{ item.titulo }}</span>
            <p v-html="item.descricao" style="padding-right: 15px;"></p>
          </v-col>
          </v-row>
        </v-col>
      </v-row>
      </v-container>
    </v-responsive>

    <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center pt-10 px-5 sessao">
    <v-container>
      <v-row class="d-flex justify-center align-center mb-10">
          <span  class="font-weight-black titulos" >O QUE A MINHA CONSULTORIA EM ESTRUTURAÇÃO DE PROCESSOS ENTREGA</span>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col lg="6" sm="12" xs="12" width="100%" max-height="700" class="d-flex justify-center align-center">
                <v-img contain position="center 25%" src="https://issei.com.br/fotos/1797x2560p.png" lazy width="90%" max-height="700" ></v-img>
          </v-col>
          <v-col lg="6" sm="12" xs="12">
            <v-card class="ma-2 rounded-xl " width="600" style="background: #947666;border: 1px solid #3F3026;" outlined shaped tile >
                <v-card-text class="d-flex flex-column justify-center justify-space-between justify-space-around ">
                    <p class="mt-5 text-center" style="font-weight:bold;color:#FFFFFF;font-size: 20px !important;">Entregáveis:</p>
                    <v-row class="d-flex flex-column justify-space-around  mt-5">
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Análise aprofundada dos processos existentes</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Desenvolvimento de um plano de melhoria de processos</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Estruturação de processos</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Organização e Padronização de Processos</p>
                    </v-row>
                    <p class="mt-5 text-center" style="font-weight:bold;color:#FFFFFF;font-size: 20px !important;">Benefícios:</p>
                    <v-row class="d-flex flex-column justify-space-around  mt-5">
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Otimização dos processos de projetos digitais</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Redução de desperdícios de tempo e recursos</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Aumento da eficiência operacional</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Melhoria na qualidade das entregas</p>
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>Maior alinhamento com objetivos estratégicos</p>
                    </v-row>
                    <p class="mt-5 text-center" style="font-weight:bold;color:#FFFFFF;font-size: 20px !important;">Por que contratar?</p>
                    <v-row class="d-flex flex-column justify-space-around  mt-5">
                      <p style="color:#FFFFFF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style="vertical-align: middle;margin-right:10px;"><path d="M20.9861 10.409V11.3284C20.9849 13.4833 20.2871 15.5801 18.9968 17.306C17.7065 19.032 15.8929 20.2946 13.8264 20.9056C11.7599 21.5166 9.5513 21.4432 7.52991 20.6964C5.50853 19.9496 3.7827 18.5694 2.60982 16.7617C1.43694 14.9539 0.879856 12.8154 1.02164 10.6651C1.16343 8.51489 1.9965 6.46807 3.3966 4.82995C4.7967 3.19184 6.68881 2.0502 8.79076 1.57529C10.8927 1.10038 13.0918 1.31766 15.0602 2.19471" stroke="#FFFFFF" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.9887 3.33215L10.9956 13.3352L7.99772 10.3373" stroke="#3F3026" stroke-width="1.86537" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        Consultoria em Estruturação de Processos de Projetos Digitais garante que sua empresa esteja equipada com processos eficazes para maximizar o sucesso de seus projetos digitais.
                      </p>
                    </v-row>
                </v-card-text>
            </v-card>
          </v-col>
          </v-row>
    </v-container>
  </v-responsive>
  <v-responsive :aspect-ratio="16 / 7" class="d-flex justify-center pt-10 px-5 sessao">
  <v-container>
  <v-row class="d-flex justify-center mb-10">
        <span  class="titulos font-weight-black" >Veja o que dizem sobre o meu trabalho</span>
      </v-row>
      <v-row class="d-flex justify-center" >
          <v-col lg="4" sm="12" xs="12">
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
          <v-col lg="4" sm="12" xs="12">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/jessWhat.jpg" max-height="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/RAFAEL2.png"   max-width="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12" >
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/THIAGO2.png" max-height="700" contain></v-img>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12" xs="12">
            <v-card class="ma-2 rounded-xl" width="450">
                    <v-img src="https://issei.com.br/dep/VALERIA.jpeg" max-height="700" contain></v-img>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </v-responsive>
  <v-responsive :aspect-ratio="16 / 4" class="d-flex justify-center sessao2">
    <v-container>
      <v-row class="d-flex flex-row flex-wrap justify-center">
        
        <v-col xs="12" sm="12" lg="6">
          <v-img contain src="/fotos/IMG_3697.jpg" max-height="700"></v-img>
        </v-col>
        
        <v-col class="d-flex align-center pt-5" xs="12" sm="12"  lg="4">
          <p v-html="who.texto" class="justify-end" ></p>
        </v-col>
        <v-col lg="2" xs="12" sm="12"  class="d-none d-sm-flex"></v-col>
      </v-row>
        <v-row justify="center">
        <BtnWhats btnColor="#5fd9c2" class="mr-4" texto_botao="FALE COMIGO"></BtnWhats>
      </v-row>
      </v-container>
  </v-responsive>   
</v-main>
</template>

<style scoped>
degrade-color {
    padding-right: 0.05em;
    background-image: linear-gradient(139deg, rgba(0,188,130,1) 0%, rgba(1,162,181,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
span{
  font-family: 'Poppins', sans-serif !important;
}
 .row{
 margin: 0px;
 }

 .isseiHeadline{
    color:#000000;
    font-family: 'Poppins', sans-serif !important;
    font-size: 40px;
    font-weight: 300;
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
  .sessao{
    color: #7A7A7A; 
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif !important;
  }
  .fundoConsultoria{
    background-image: url('/fundo/cinza.png'); 
    background-position: center; 
    background-repeat: no-repeat;  
    background-size: cover;
  }
  .fundoConsultoriaSM{
    background-image: url('/fundo/cinza.png'); 
    background-position: center; 
    background-repeat: no-repeat;  
    background-size: cover;
  }
  
  .sessao2{
    color: #54595F; 
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif !important;
  }
  .fotoTalitaHead{
    height: 1000px;
  }
 @media only screen and (max-width: 830px) {

  .fotoTalitaHead{
    height: 600px;
  }
  .fundoConsultoria{
    background-color: #FFFFFF;
  }
}
@media only screen and (min-width: 840px) {
  .isseiHeadline{
    font-size: 40px !important;
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
  layout: 'servico',
  mounted() {
  },
  data() {
    return {
      //"VOCÊ QUER UM MOVIMENTO, INSPIRAR E TRANSFORMAR PESSOAS ATRAVÉS DO SEU CONHECIMENTO"
      //"Transforme sua PAIXÃO em um Curso Digital e conquiste sua liberdade financeira"
      //"TRANSFORME A SUA EXPERIÊNCIA PROFISSIONAL E UM CURSO ON-LINE E CONQUISTE A SUA LIBERDADE FINANCEIRA"
      //titulo: "<SPAN STYLE=\"font-weight:bold\">Transforme</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">experiência profissional</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso on-line</SPAN> e <SPAN STYLE=\"font-weight:bold\">conquiste</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">liberdade financeira</SPAN>",
      headline: {
        titulo: "<span class=\"mt-5 isseiHeadline animate__animated animate__fadeInDown\">ORGANIZAÇÃO QUE GERA RESULTADOS: CONSULTORIA DE ESTRUTURAÇÃO DE PROCESSOS PARA EMPRESAS/PROJETOS DIGITAIS</span>",
        subtitulo: "Maximize o crescimento da sua Empresa com uma Especialista em organização de processos",
        texto_botao: "Fale Comigo",
        btnColor: "#03989e",
        style: "background-image: url('https://issei.com.br/fundomadeira.png'); background-position: center; background-repeat: no-repeat;  background-size: cover; background: #DDDDDD; color: #000000;",
        imagem: "https://issei.com.br/fotos/IMG_3624.jpg",
      },
      praquemeh:{
        titulo: "PARA QUEM É?",
        imagem: "https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",
        itens: [
          {
            texto: "Para quem quer transformar a sua experiência profissional em um curso on-line mas não tem clareza de qual caminho seguir.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },
          {
            texto: "Busca uma parceria para executar o lançamento do seu curso on-line de ponta a ponta com sucesso.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },
          {
            texto: "Quer usar o poder da internet para escalar as vendas do seu curso on-line.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          }
        ]
      },
      chamadaAcao:{
        titulo: "Como participar?",
        descricao: "Cadastre-se na lista de espera para ser avisado da próxima turma.",
        style: "background: #FFFFFF; color: #000000;",
        btnColor: "#03989e"
      },
      who:{
        titulo: "",
        foto: "/fotos/IMG_3398.jpg",
        texto: "<p>Com mais de 15 anos de trajetória em Grandes Empresas Multinacionais e Consultorias, atuei na liderança de projetos e equipes, demonstrando uma sólida habilidade em gestão e coordenação.<br/><br/>Nos últimos 2 anos e meio, direcionei minha carreira para o universo do Marketing Digital, onde participei ativamente de mais de 20 lançamentos digitais significativos, atuando como Gerente de Projetos.<br/><br/>Sou apaixonada em auxiliar equipes a alcançarem seus objetivos, assegurando que os projetos sejam concluídos em conformidade com os prazos e orçamentos estabelecidos.<br/><br/>Atualmente, faço parte de uma das maiores mentorias do marketing digital, o “Bastidor Pro” - Priscila Zillo.</p>",
      },
      what:{
        titulo: "Para quem é?",
        texto: "Você tem alguma agência ou pessoa responsável pela sua estratégia de venda?<br />Vejo que você tem muito potencial, se alinhar o seu conteúdo com uma boa estratégia de venda você pode ter muito mais resultado e alcançar muito mais pessoas. Se tiver interesse no Dia tal eu tenho um horário, podemos marcar uma call e conversarmos sobre o que eu imagino que pode ser feito para impulsionar suas redes, quem sabe rola uma parceria",
        imagem: "https://issei.com.br/img/undraw_stepping_up_g6oo.svg",
      },
      praquem: {
        titulo: "BUSCO ALGUÉM QUE:",
        items: [
        {
          imagem: "https://issei.imgix.net/talita/pensamento.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Tenha <SPAN STYLE=\"font-weight:bold\">interesse</SPAN> e uma <SPAN STYLE=\"font-weight:bold\">metodologia</SPAN> de transformar a sua <SPAN STYLE=\"font-weight:bold\">experiência</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso on-line</SPAN>"
        },
        {
          imagem: "https://issei.imgix.net/talita/quebra-cabeca.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Busque uma <SPAN STYLE=\"font-weight:bold\">parceria</SPAN> para lançar o seu curso on-line"
        },
        {
          imagem: "https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Tenha <SPAN STYLE=\"font-weight:bold\">disponibilidade</SPAN> e <SPAN STYLE=\"font-weight:bold\">paixão</SPAN> para fazer acontecer!"
        },
      ],
      },
      entregaveis: {
              items: [
                {
                titulo: "CONSULTORIA PERSONALIZADA",
                descricao: "Nossa consultoria vai além do convencional. Entendemos profundamente suas necessidades específicas. Adaptamos os processos para garantir o melhor desempenho para sua empresa."
              },
              {
                titulo: "PREVISIBILIDADE E EFICÁCIA NOS PROCESSOS",
                descricao: "Implementamos processos claros e eficientes, focados em antecipar e superar obstáculos. Esta abordagem assegura uma execução de projeto previsível, minimizando riscos e aumentando a confiabilidade do seu negócio."
              },
              {
                titulo: "ESTRATÉGIAS ALINHADAS COM SUAS PRIORIDADES",
                descricao: "Após o levantamento do time necessário para atender a demanda do lançamento, organizarei as atividades de cada responsável na ferramenta Trello."
              },
              {
                titulo: "REDUÇÃO DE DESPERDÍCIOS PARA MAIOR RENTABILIDADE",
                descricao: "Nossa metodologia é fundamentada na utilização otimizada de tempo e recursos. Focamos em evitar desperdícios e o uso desnecessário de recursos, contribuindo para uma gestão mais sustentável e econômica do seu negócio. "
              }
            ]
            },
      conteudos: {
        titulo: "CONTE COMIGO!",
        items: [
          {
          imagem: "https://issei.imgix.net/talita/check-calendar.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Fase de Preparação:</SPAN> Estratégias do Lançamento,  Cronograma de Atividades e Página do Evento."
        },
        {
          imagem: "https://issei.imgix.net/talita/peça.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Gestão de Tráfego Pago:</SPAN> Google ADS, Facebook/Instagram e YouTube"
        },
        {
          imagem: "https://issei.imgix.net/talita/objetivo.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Comprometimento e Disciplina:</SPAN> Estou 101% comprometida em transformar o meu conhecimento em um negócio de muito sucesso."
        },
      ],
      },
      faqs: [
        {
          pergunta: "Precisa ter conhecimento em programação?",
          resposta: "Não, o curso é para crianças e adolescentes que tenham interesse e querem aprender conceitos de programação."
        },
        {
          pergunta: "O curso é presencial?",
          resposta: "Não, para atender todos os interessados, nosso curso é 100% online."
        },
        {
          pergunta: "Tem suporte para tirar as dúvidas?",
          resposta: "Sim, o aluno e os pais terão contato direto com o Professor através do WhatsApp e e-mail."
        },
        {
          pergunta: "Por que aprender programação e tecnologia ainda em idade escolar?",
          resposta: "Entre os muitos benefícios da lógica de programação podemos citar: desenvolvimento criativo, ampliação do raciocínio lógico e resolução de problemas. Saber programar é praticamente tão importante quanto dominar o inglês, uma vez que as empresas procuram cada vez mais por profissionais com essa habilidade. Inclusive, essa tendência tende a continuar crescente nos próximos anos. Por isso, investir na programação para crianças é uma forma de garantir ao seu filho um diferencial competitivo para quando ele entrar no mercado de trabalho."
        },
        {
          pergunta: "O curso oferece garantia?",
          resposta: "Os novos alunos matriculados tem 14 dias para conhecer a nossa metodologia. Caso ele não goste do curso, você poderá enviar um e-mail para o nosso suporte e ter o reembolso do valor integral do curso."
        },
        {
          pergunta: "Quando será aberta as inscrições para a próxima turma?",
          resposta: "Avisaremos por e-mail quando iniciarmos as inscrições . Caso tenha interesse, cadastre-se na lista de espera."
        },
        {
          pergunta: "Eu posso começar a fazer o Curso de Programação agora?",
          resposta: "As inscrições não estão abertas, abriremos algumas vezes ao ano, pois dessa forma conseguimos nos organizar para receber todos os alunos com o maior nível de excelência possível. Caso tenha interesse em saber sobre a abertura das inscrições, cadastre-se na lista de espera."
        },
      ],
    };
  },
};
</script>