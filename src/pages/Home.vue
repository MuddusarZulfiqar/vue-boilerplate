<template>
    <v-container class="py-10">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card elevation="8" class="pa-6">
                    <v-card-title class="text-h5 text-center">
                        Home Page
                    </v-card-title>

                    <v-card-text>
                        <p>Welcome to the home page!</p>
                        <p>This is a simple Vue.js application.</p>
                        <p>Feel free to explore the features and functionalities.</p>

                        <div class="mt-4">
                            <v-btn v-if="isAdmin" :to="{ name: 'admin-dashboard' }" color="primary" variant="elevated">
                                Go to Admin Dashboard
                            </v-btn>

                            <v-btn v-else-if="isUser" :to="{ name: 'user-dashboard' }" color="secondary"
                                variant="elevated">
                                Go to User Dashboard
                            </v-btn>

                            <div v-if="!authStore.token" class="mt-4">
                                <p>
                                    If you want to log in,
                                    <RouterLink :to="{ name: 'login' }" class="text-primary font-weight-bold">
                                        click here to Login
                                    </RouterLink>.
                                </p>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useAuthStore } from '@/store'; // assuming you're using stores/index.js
import { computed } from 'vue';

const authStore = useAuthStore();

const userRole = computed(() => authStore.userRole);
const isAdmin = computed(() => userRole.value === 'admin');
const isUser = computed(() => userRole.value === 'user');
</script>