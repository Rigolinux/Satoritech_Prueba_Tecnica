<template>

    <div>
       
            <template >
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Producto</h2>
            </template>
            <CardLayout>
              <v-row>
                <v-col cols="12" md="12" class="flex justify-end">
                  <v-btn color="primary"> 
                    <RouterLink :to="{name: 'product-create'}">
                      <v-icon>mdi-plus</v-icon> 
                      Crear </RouterLink>
                  </v-btn>
              
                </v-col>
              </v-row>
              <RouterView></RouterView>
                <v-data-table   class="elevation-1 mt-2" :items="items" :headers="headers" hide-default-header>
                    <template v-slot:item.cat="{ item }">
                        <span>{{ item.category.name }}</span>
                    </template>
                   <template v-slot:item.actions="{ item }">
                        <v-icon title="ver imagen" small class="mr-2" color="blue" @click="displayImage(item)">mdi-image</v-icon>
                        <v-icon title="editar" class="mr-2" color="blue" @click="editProduct(item)">mdi-pencil</v-icon>
                        <v-icon title="borrar" color="red" @click="deleteProduct(item)">mdi-delete</v-icon>
                    </template> 
              
                 
                </v-data-table>
            </CardLayout>
            <v-dialog v-model="showDialog" max-width="600">
                <v-card>
                    <v-card-title>
                        <span class="text-h6">Imagen del producto</span>
                    </v-card-title>
                    <v-card-text>
                        <v-img :src="dialogData?.image_url" aspect-ratio="1"></v-img>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="showDialog = false">Cerrar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
    </div>
</template>
<script lang="ts">

import  CardLayout from '@/components/CardLayout.vue';
import { RouterLink,RouterView } from 'vue-router';
import type { Product } from "@/types/objects";
import { getProducts,removeProduct } from '@/api/products';

export default {
    name: 'ListProduct',
    components: {
        CardLayout,
        RouterLink,
        RouterView
    },
    data(): {
        items : Product[],
        headers: any,
        showDialog: boolean,
        dialogData: Product | { image_url: string}
       
    } {
       return {
            items: [],
            headers: [
                { title: 'SKU', value: 'sku' ,align: 'left', filterable: true,sortable: false, },
                { title: 'Nombre', value: 'name' , filterable: true,},
                { title: 'Stock', value: 'stock', filterable: true, },
                { title: 'Calificacion', value: 'cualification', filterable: true, },
                { title: 'Categoria', value: 'cat', filterable: true, },
                { title: 'Acciones', value: 'actions', },
            ],
            showDialog: false,
            dialogData: { image_url: ''}
            
       }
    },
  
    mounted() {
          this.getAllProduct();
        
    },
    methods: {
        async getAllProduct(){
            try {
                const response = await getProducts();
                if(response.data){
                  console.log(response.data)
                    this.items = response.data;
                
                }
               
            } catch (error) {
                console.log(error)
            }
        },
        editProduct(item: Product){
            this.$router.push({name: 'product-edit', params: {id: item.sku}})
        },
        async deleteProduct(item: Product){
            try {
                if(item.sku)
                await removeProduct(item.sku);
                this.getAllProduct();
            } catch (error) {
                console.log(error)
            }
        },
        displayImage(item: Product){
            this.dialogData = item;
            this.showDialog = true;
        }
        
    },
};
</script>
