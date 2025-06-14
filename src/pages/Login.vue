<template>
    <h3 class="text-h6 mb-4 text-center">
        {{ $t('login') }}
    </h3>
    <v-form @submit.prevent="handleLogin">
        <v-text-field v-model="username" label="Username" name="username" required />

        <v-text-field v-model="password" label="Password" name="password" type="password" required />

        <v-btn type="submit" :loading="isPending" block color="primary" class="mt-4">
            {{ isPending ? 'Logging in...' : 'Login' }}
        </v-btn>

        <v-alert v-if="error" type="error" class="mt-4" density="compact">
            {{ error.message }}
        </v-alert>

        <div class="mt-4 text-center">
            <span>
                Don't have an account?
                <RouterLink :to="{ name: 'home' }">Go to Home Page</RouterLink>
            </span>
        </div>
    </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginMutation } from '@/api/composables/useLoginMutation'

// Form state
const username = ref('evelyns')
const password = ref('evelynspass')

// Router instance
const router = useRouter()

// API call
const { login, isPending, error } = useLoginMutation()

// Submit handler
const handleLogin = () => {
    login({ username: username.value, password: password.value })
        .then(() => {
            router.push({ name: 'home' })
        })
        .catch((err) => {
            console.error('Login failed:', err)
        })
}
</script>