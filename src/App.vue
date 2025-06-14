<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import ErrorBoundary from '@/components/core/ErrorBoundary.vue'
</script>

<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <ErrorBoundary>
          <template #default>
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
          <template #fallback>
            <v-container class="fill-height d-flex align-center justify-center">
              <v-card class="pa-6" max-width="500" elevation="10" color="red lighten-5">
                <v-card-title class="headline red--text text--darken-2">
                  <v-icon left color="red darken-2">mdi-alert-circle-outline</v-icon>
                  Oops! Something went wrong
                </v-card-title>
                <v-card-text class="text-body-1">
                  We encountered an unexpected error. Please try refreshing the page or contact support if the issue
                  persists.
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn color="white" @click="window.location.reload()">Refresh</v-btn>
                  <v-btn text href="mailto:support@example.com">Contact Support</v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </template>
        </ErrorBoundary>
      </router-view>
    </v-main>

    <VueQueryDevtools />
  </v-app>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
