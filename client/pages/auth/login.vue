<script setup lang="ts">
const { login } = useSanctumAuth()

const form = reactive({
  email: 'alex@codecourse.com',
  password: 'password'
})

const submit = async () => {
  await login(form)
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <input type="email" name="email" id="email" v-model="form.email">
    <input type="password" name="password" id="password" v-model="form.password">
    <button>Sign in</button>
  </form>
</template>