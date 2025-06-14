<template>
  <v-app>
    <!-- Top Language Switcher -->
    <v-container class="pt-4" fluid>
      <language-switcher />
    </v-container>

    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ $t('welcome') }} {{ user?.username || 'Guest' }}
      </v-toolbar-title>
      <v-spacer />

      <!-- Language Switcher Dropdown in App Bar -->
      <language-switcher />
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container class="py-10" fluid>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <div v-if="isLoading" class="text-center">
              <v-progress-circular indeterminate color="primary" />
            </div>
            <router-view v-else />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app padless color="grey-lighten-4">
      <v-container>
        <span class="text-caption">Default Footer</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useCurrentUserQuery } from '@/api/composables/useCurrentUserQuery'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { ref, watch } from 'vue'

const { data, isLoading } = useCurrentUserQuery()

const user = ref(null)

watch(
  () => data.value,
  (val) => {
    user.value = val
  },
  { immediate: true }
);
</script>