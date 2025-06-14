<template>
    <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
        <p>This page is accessible only to administrators.</p>
        <p>Here you can manage users, view reports, and perform administrative tasks.</p>
        <router-link :to="{name:'home'}">Go to Home Page</router-link>
        <div style="margin-block: 20px;">
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