<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <header class="h-6 flex justify-items-start items-center">
    <div class="w-full">

      <nav class="mt-5">
        <RouterLink class="ml-4" to="/">Home</RouterLink>
        <RouterLink class="ml-4"  to="/about">About</RouterLink>
        <RouterLink class="ml-4"  to="/login">login</RouterLink>
        <RouterLink class="ml-4"  to="/category">Categorias</RouterLink>
      </nav>
    </div>
  </header>
  <div class="mt-5">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
