<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest']
})

const { register } = useAuth()
const { refreshIdentity } = useSanctumAuth()

const form = reactive<RegisterForm>({
  name: '',
  email: '',
  password: ''
})

const errors = ref<ValidationErrors>({})

const submit = async () => {
  try {
    await register(form)
    await refreshIdentity()

    await navigateTo('/dashboard')
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
      <label for="name">Name</label>
      <div>
        <input type="text" name="name" id="name" v-model="form.name">
        <div v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
    </div>
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
    <button>Create an account</button>
  </form>
</template>