<template>
    <CardLayout>

        <CategoryForm :isUpdate="false" textLabel="Crear categoria" textCancel="Regresar a la lista" @cancel="redirecUser()" @send="createCategory" />
    </CardLayout>
   
</template>

<script lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import CategoryForm from '@/components/CategoryForm.vue';
import type { Category } from '@/types/objects';
import {create } from '@/api/category';
export default {
    name: 'CreateCategory',
    components: {
        CardLayout,
        CategoryForm
    },
    data():{

    } {
        return {
            
      
        }
    },
    mounted() {
      console.log('CategoryCreate mounted')  
    },
    methods: {
        redirecUser(){
            this.$router.push({name: 'category-list'})
        },
        async createCategory(data: Category){
            try {
                const response = await create(data);
                console.log(response);
                this.$router.push({name: 'category-list'})
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>