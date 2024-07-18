<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest']
})

const { register } = useAuth()
const { refreshIdentity } = useSanctumAuth()

const form = reactive<RegisterForm>({
  name: 'Alex',
  email: 'alex@codecourse.com',
  password: 'password'
})

const submit = async () => {
  await register(form)
  await refreshIdentity()

  await navigateTo('/dashboard')
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <div>
      <label for="name">Name</label>
      <div>
        <input type="text" name="name" id="name" v-model="form.name">
      </div>
    </div>
    <div>
      <label for="email">Email address</label>
      <div>
        <input type="email" name="email" id="email" v-model="form.email">
      </div>
    </div>
    <div>
      <label for="password">Password</label>
      <div>
        <input type="password" name="password" id="password" v-model="form.password">
      </div>
    </div>
    <button>Create an account</button>
  </form>
</template>