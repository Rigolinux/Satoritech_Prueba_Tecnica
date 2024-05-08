<template>
    <div>
        <v-form  v-model="isValid">              
            <v-text-field class="mt-2"  label="Nombre" :rules="nameRules"  required v-model="form.name"></v-text-field>
            <v-textarea class="mt-2"  label="Descripción" :rules="descriptionRules"  required v-model="form.description"></v-textarea>
            <div class="flex justify-between">

                <v-btn class="mt-5" @click.prevent="cancel()" color="red">{{ textCancel }}</v-btn>
                <v-btn class="mt-5" @click.prevent="send()" color="primary">{{ textLabel }}</v-btn>
            </div>
        </v-form>
    </div>
</template>


<script lang="ts">
import { minLenght,isRequired  } from '@/utils/Formvalidations';
import { type Category } from '@/types/objects';
export default {
    name: 'CategoryForm',
    props: {
        isUpdate: {
            type: Boolean,
            required: true
        },
        textLabel: {
            type: String,
            required: true
        
        },
        textCancel: {
            type: String,
            required: true
        
        },
        category: {
            type: Object as () => Category,
            required: false
        }

    },
    data(): {
        form : Category,
        isValid: boolean
    } {
       return {
            form: {
                name: '',
                description: '',
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
        descriptionRules(){
            return [
                (value: string)  => isRequired(value),
                (value: string)  => minLenght(value),
            ]
        }
    },
    mounted(){
        if(this.isUpdate){
            if (this.category) {
                this.form = this.category;
            }
        }
    },
    methods: {
         send(){
            if(!this.isValid) return
            this.$emit('send', this.form)
        },
        cancel(){
            this.$emit('cancel')
        }
    }
}
</script>