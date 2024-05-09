<template>
    <div>
        <v-form  v-model="isValid"> 
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <div class="flex justify-center">

                        <v-img
                        :width="300"
                        :max-height="300"
                        :src="form.image_url"
                        ></v-img>    
                    </div>
                    <v-file-input
                        class="mt-2"
                        v-model="form.image"
                        accept="image/*"
                        label="Imagen"
                        @change="uploadImage"
                    ></v-file-input>         
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field class="mt-2"  label="SKU" @keyup="uppercase" :rules="nameRules"  required v-model="form.sku"></v-text-field>
                    <v-text-field class="mt-2"  label="Nombre"  :rules="nameRules"  required v-model="form.name"></v-text-field>
                    <v-text-field class="mt-2"  label="Stock"  type="number" :rules="nameRules"  required v-model="form.stock"></v-text-field>
                    <v-text-field class="mt-2"  label="Califiacacion (0 al 5)"  type="number" :rules="nameRules"  required v-model="form.cualification"></v-text-field>
                </v-col>
            </v-row>
            <v-autocomplete
                class="mt-2"
                v-model="form.category_id"
                :items="categoryList"
                item-title="name"
                item-value="id"
                label="Categoria"
                required
            ></v-autocomplete>
            <div class="flex justify-between">

                <v-btn class="mt-5" @click.prevent="cancel()" color="red">{{ textCancel }}</v-btn>
                <v-btn class="mt-5" @click.prevent="send()" color="primary">{{ textLabel }}</v-btn>
            </div>
        </v-form>
    </div>
</template>


<script lang="ts">
import { minLenght,isRequired  } from '@/utils/Formvalidations';
import { type Product } from '@/types/objects';
import { useStore } from 'vuex';

export default {
    name: 'ProductForm',
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
        product: {
            type: Object as () => Product,
            required: false
        }

    },
    data(): {
        form : Product,
        isValid: boolean
    } {
       return {
            form: {
            sku: '',
            name: '',
            stock: 0,
            cualification: 0,
            image: '',
            image_url: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            category_name: '',
            currentSku: '',
           
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
        },
        categoryList() {
                        const store = useStore();
                        return store.state.categories;
        }
    },
    mounted(){
        const store = useStore();
        store.dispatch('fetchCategories')
       
        if(this.isUpdate){
            if (this.product) {
                this.form = this.product;
                this.form.currentSku = this.product.sku;

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
        },
        uppercase(){
            this.form.sku = this.form.sku?.toUpperCase()
        },
        uploadImage(event: any){
            const file = event.target.files[0];
            this.form.image = file;
            this.form.image_url = URL.createObjectURL(file);
        }
    }
}
</script>