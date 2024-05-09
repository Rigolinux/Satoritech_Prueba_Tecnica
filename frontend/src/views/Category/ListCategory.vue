<template>

    <div>
       
            <template >
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Category</h2>
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
           
                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" color="blue" @click="editCategory(item)">mdi-pencil</v-icon>
                        <v-icon small color="red" @click="deleteCategory(item)">mdi-delete</v-icon>
                    </template>
              
                 
                </v-data-table>
            </CardLayout>
         
    </div>
</template>
<script lang="ts">

import  CardLayout from '@/components/CardLayout.vue';
import { RouterLink,RouterView } from 'vue-router';
import type { Category } from "@/types/objects";
import { getCategories,remove } from '@/api/category';

export default {
    name: 'ListCategory',
    components: {
        CardLayout,
        RouterLink,
        RouterView
    },
    data(): {
        items : Category[],
        headers: any
       
    } {
       return {
            items: [],
            headers: [
                { title: 'Id', value: 'id' ,align: 'left', filterable: true,sortable: false, },
                { title: 'Nombre', value: 'name' , filterable: true,},
                { title: 'Descripcion', value: 'description', filterable: true, },
                { title: 'Acciones', value: 'actions', },
            ]
            
       }
    },
  
    mounted() {
          this.getAllCategory();
        
    },
    methods: {
        async getAllCategory(){
            try {
                const response = await getCategories();
                if(response.data.categories){
                  console.log(response.data.categories)
                    this.items = response.data.categories;
                
                }
                this.items = response.data.categories;
            } catch (error) {
                console.log(error)
            }
        },
        editCategory(item: Category){
            this.$router.push({name: 'category-edit', params: {id: item.id}})
        },
        async deleteCategory(item: Category){
            try {
                if(item.id)
                await remove(item.id);
                this.getAllCategory();
            } catch (error) {
                console.log(error)
            }
        }
        
    },
};
</script>
