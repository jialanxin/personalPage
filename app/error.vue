<template>
  <v-app dark>
    <v-main>
      <v-container>
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <NuxtLink to="/">
          Home page
        </NuxtLink>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useError } from 'nuxt/app';

const error = useError()

const pageNotFound = '404 Not Found'
const otherError = 'An error occurred'

useHead({
  title: error.value.statusCode === 404 ? pageNotFound : otherError
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
