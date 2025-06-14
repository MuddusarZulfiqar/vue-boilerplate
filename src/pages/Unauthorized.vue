<template>
    <div>
        <h1>Unauthorized Access</h1>
        <p>You do not have permission to view this page.</p>
        <p>Please contact your administrator if you believe this is an error.</p>
        <router-link :to="{name:'home'}">Go to Home Page</router-link>
        <div v-if="authStore.token" style="margin-block: 20px;">
            <button @click="handleLogout">Logout</button>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter();
const authStore = useAuthStore();

function handleLogout() {
    authStore.clearSession()
    router.push({
        name:'home'
    })
}
</script>

<style lang="scss" scoped>

</style>