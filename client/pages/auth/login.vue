<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest']
})

const { login } = useSanctumAuth()

const form = reactive<LoginForm>({
  email: '',
  password: ''
})

const errors = ref<ValidationErrors>({})

const submit = async () => {
  try {
    await login(form)
  } catch (e: any) {
    if (e.statusCode === 422) {
      errors.value = e.data.errors
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <div>
      <label for="email">Email address</label>
      <div>
        <input type="email" name="email" id="email" v-model="form.email">
        <div v-if="errors.email">
          {{ errors.email[0] }}
        </div>
      </div>
    </div>
    <div>
      <label for="password">Password</label>
      <div>
        <input type="password" name="password" id="password" v-model="form.password">
        <div v-if="errors.password">
          {{ errors.password[0] }}
        </div>
      </div>
    </div>
    <button>Sign in</button>
  </form>
</template>