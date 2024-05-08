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
            
            <v-form>
              
              <v-text-field label="Email" type="email"></v-text-field>
              <v-text-field label="Password" type="password"></v-text-field>
              <v-btn color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2"></v-col>

    </v-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  }
  
}
</script>