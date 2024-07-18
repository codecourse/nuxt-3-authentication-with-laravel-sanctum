<script setup lang="ts">
const { isAuthenticated } = useSanctumAuth()
const user = useSanctumUser<User>()
</script>

<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center space-x-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    </div>

    <div class="flex items-center space-x-6" v-if="!isAuthenticated">
      <NuxtLink to="/auth/login">Sign in</NuxtLink>
    </div>

    <div class="flex items-center space-x-6" v-if="isAuthenticated">
      <div class="font-semibold">
        {{ user?.name }}
      </div>
    </div>
  </div>
</template>
