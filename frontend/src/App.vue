
<template>
  <header class=" flex justify-items-start items-center">
    <div class="w-full">

      <nav class="mt-8 flex justify-between">
        <div>
          <template v-if="!token">
            <RouterLink class="ml-4" to="/login">login</RouterLink>
            <RouterLink class="ml-4" to="/login">Regist</RouterLink>
          </template>
          <template v-else>
            <RouterLink class="ml-4"  to="/category">Categorias</RouterLink>
          </template>
        </div>
        <v-btn class="mr-4" color="red" @click="logout()">Cerrar Sesion</v-btn>
      </nav>
    </div>
  </header>
  <div class="mt-">
    <RouterView />
  </div>
</template>
<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { logoutReq } from './api/auth';
export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  computed: {
    token(){
      return localStorage.getItem('token')
    }
  },
  methods: {
    logout(){
      try {
        logoutReq()
        localStorage.removeItem('token')
        this.$router.push({name: 'login'})
      } catch (error) {
        console.log(error)
      }
    }
  }
}


</script>

<style scoped>

</style>
