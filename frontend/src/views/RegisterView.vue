<template>
  <div class="flex justify-center items-center ">
    
    <v-row>
    <v-col cols="12" md="3"></v-col>
    <v-col cols="12" md="6" sm="12">
    <v-card >
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
          
        <AuthForm :isLogin="false" textLabel="Registrar"  @send="registerUser" ></AuthForm>
             
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2"></v-col>

    </v-row>
  </div>
</template>

<script lang="ts">
import { registerReq } from '@/api/auth'
import AuthForm from '@/components/AuthForm.vue';

export default {
  name: 'RegisterView',
  components: {
    AuthForm
  },
  methods: {
    async registerUser(data: User){
      try {
        const response = await registerReq(data)
        if(response.data){
          localStorage.setItem('token', response.data.token)
          this.$router.push({name: 'login'})
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }
  
}
</script>