
<template>
  <header class=" flex justify-items-start items-center">
    <div class="w-full">

      <nav class="mt-8 flex " :class="token ? 'justify-between': 'justify-start'">
        <div>
          <template v-if="!token">
            <RouterLink class="ml-4" to="/login">login</RouterLink>
            <RouterLink class="ml-4" to="/register">Registrase</RouterLink>
          </template>
          <template v-else>
            <RouterLink class="ml-4"  to="/category">Categorias</RouterLink>
            <RouterLink class="ml-4"  to="/product">Productos</RouterLink>
          </template>
        </div>
         <template v-if="token">
          <v-btn class="mr-4" color="red" @click="logout()">Cerrar Sesion</v-btn>
        </template>
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
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    logout(){
      try {
        logoutReq()
        localStorage.removeItem('token');
        this.$store.commit('setToken', null)
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
