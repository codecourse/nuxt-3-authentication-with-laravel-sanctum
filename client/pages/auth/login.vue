<script setup lang="ts">
const { login } = useSanctumAuth()

const form = reactive<LoginForm>({
  email: 'alex@codecourse.com',
  password: 'password'
})

const submit = async () => {
  await login(form)
}
</script>

<template>
  <form v-on:submit.prevent="submit">
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
    <button>Sign in</button>
  </form>
</template>