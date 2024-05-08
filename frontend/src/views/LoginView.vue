<template>
  <div class="flex justify-center items-center ">
    
    <v-row>
    <v-col cols="12" md="3"></v-col>
    <v-col cols="12" md="6" sm="12">
    <v-card >
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
            
            <AuthForm :isLogin="true" textLabel="Ingresar"  @send="loginuser" ></AuthForm>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2"></v-col>

    </v-row>
  </div>
</template>

<script lang="ts">
import AuthForm from '@/components/AuthForm.vue';

import { loginReq } from '@/api/auth'

export default {
  name: 'LoginView',
  components: {
    AuthForm
  },
  data() {
    
  },
  methods: {
    async loginuser(data: LoginUser){
      try {
        const response = await loginReq(data)
       if(response.data){
        localStorage.setItem('token', response.data.token)
          this.$router.push({name: 'category-list'})
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }
  
}
</script>