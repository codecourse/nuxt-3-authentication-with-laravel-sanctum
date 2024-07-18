<script setup lang="ts">
const { isAuthenticated, logout: logoutAction } = useSanctumAuth()
const user = useSanctumUser<User>()

const logout = async () => {
  await logoutAction()
  await navigateTo('/example')
}
</script>

<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center space-x-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    </div>

    <div class="flex items-center space-x-6" v-if="!isAuthenticated">
      <NuxtLink to="/auth/login">Sign in</NuxtLink>
      <NuxtLink to="/auth/register">Create an account</NuxtLink>
    </div>

    <div class="flex items-center space-x-6" v-if="isAuthenticated">
      <div class="font-semibold">
        {{ user?.name }}
      </div>
      <button v-on:click="logout">
        Sign out
      </button>
    </div>
  </div>
</template>
