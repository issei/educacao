<template>
  <v-responsive :aspect-ratio="16 / 4" class="d-flex justify-center align-center pa-2" style="background: #fbc439; color: #FFFFFF;">
    <v-container>
        <v-row class="d-flex justify-center align-center">
            <h1 class="d-flex justify-center align-center headline"  style="color: black">
                Módulos
            </h1>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-card class="ma-2 rounded-xl " width="250" height="200">
                <v-card-title class="justify-center">Computação</v-card-title>
                <v-card-text class="d-flex justify-center align-center">
                    <ul>
                        <li>Abstração</li>
                        <li>Algoritimo</li>
                        <li>Reconhecimento de Padrões</li>
                    </ul>
                </v-card-text>
            </v-card>
            <v-card class="ma-2 rounded-xl" width="250" height="200">
                <v-card-title class="justify-center">Mundo Digital</v-card-title>
                <v-card-text class="d-flex justify-center align-center">
                    <ul>
                        <li>Tecnologias</li>
                        <li>Cidadania Digital</li>
                        <li>O Poder dos "Dados"</li>
                    </ul>
                </v-card-text>
            </v-card>
            <v-card class="ma-2 rounded-xl" width="250" height="200">
                <v-card-title class="justify-center">Programação</v-card-title>
                <v-card-text class="d-flex justify-center align-center">
                    <ul>
                        <li>Linguagens</li>
                        <li>Objetos</li>
                        <li>Funções</li>
                        <li>Processamento</li>
                        <li>Integrações</li>
                    </ul>
                </v-card-text>
            </v-card>
            <v-card class="ma-2 rounded-xl" width="250" height="200">
                <v-card-title class="justify-center">Projeto</v-card-title>
                <v-card-text class="d-flex justify-center align-center">
                    <ul>
                        <li>Organização</li>
                        <li>Elaboração</li>
                        <li>Desenvolvimento</li>
                        <li>Entrega</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
  </v-responsive>
</template>