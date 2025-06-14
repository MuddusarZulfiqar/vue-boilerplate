<script setup>
import { useRouter, useRoute } from 'vue-router'
import config from '@/config'
import { ref } from 'vue'
import { inject } from 'vue'
const $vueform = inject('$vueform')


const router = useRouter()
const route = useRoute()

// Locale options from config
const locales = config.settings.supportedLocales
const currentLocale = ref(route.params.locale || config.settings.defaultLocale)

/**
 * Switches language by updating the route param
 */
function switchLanguage(lang) {
  currentLocale.value = lang
  $vueform.value.i18n.locale = lang

  if (!route.name) return

  router.push({
    name: route.name,
    params: {
      ...route.params,
      locale: lang,
    },
    query: route.query,
  })
}
</script>

<template>
  <v-menu offset-y>
    <template #activator="{ props }">
      <v-btn v-bind="props" icon variant="flat" color="white">
        {{locales.find(l => l.code === currentLocale)?.flag || '🌐'}}
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="locale in locales" :key="locale.code" @click="switchLanguage(locale.code)"
        :value="locale.code">
        <v-list-item-title>
          {{ locale.flag }} {{ locale.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
