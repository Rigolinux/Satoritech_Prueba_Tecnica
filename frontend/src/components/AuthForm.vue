<template>
    <div>
        <v-form @click.prevent="send()" v-model="isValid">              
            <template v-if="!isLogin">
                <v-text-field class="mt-2"  label="Nombre" :rules="nameRules"  required v-model="form.name"></v-text-field>
            </template>
            <v-text-field class="mt-2"  label="Correo" :rules="emailRules"  required v-model="form.email" type="email"></v-text-field>
            <v-text-field class="mt-2"  label="Contraseña" :rules="passwordRules"  required v-model="form.password" type="password"></v-text-field>
            <template v-if="!isLogin">
                <v-text-field class="mt-2"  label="telefono" :rules="phoneRules"  required v-model="form.phone" type="number"></v-text-field>
            </template>
           
            <v-btn class="mt-5" color="primary">{{ textLabel }}</v-btn>
        </v-form>
    </div>
</template>


<script lang="ts">
import { isEmail,isPhone,minLenght,isRequired  } from '@/utils/Formvalidations'
export default {
    name: 'AuthForm',
    props: {
        isLogin: {
            type: String,
            required: true
        },
        textLabel: {
            type: String,
            required: true
        
        }
    },
    data() {
       return {
           form:{
                name: '',
                email: '',
                password: '',
                phone: '',
           },
            isValid: false,
       }
    },
    computed: {
        nameRules(){
            return [
                (value: string)  => isRequired(value),
            ]
        },
        emailRules(){
            return [
                (value: string)  => isRequired(value),
                (value: string)  => isEmail(value),
            ]
        },
        passwordRules(){
            return [
                (value: string)  => isRequired(value),
                (value: string)  => minLenght(value),
            ]
        },
        phoneRules(){
            return [
                (value: string)  => isRequired(value),
                (value: string)  => isPhone(value),
            ]
        }
    },
    methods: {
        async send(){
            if(!this.isValid) return
            this.$emit('send', this.form)
        }
    }
}
</script>