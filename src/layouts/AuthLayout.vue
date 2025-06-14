<template>
  <v-app>
    <v-main>
      <v-container class="d-flex flex-column align-center justify-center fill-height">
        <v-card class="pa-6" max-width="700" elevation="10">
          <v-card-title class="text-h5 text-center">
            Auth Page
          </v-card-title>

          <v-card-text>
            <router-view />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
