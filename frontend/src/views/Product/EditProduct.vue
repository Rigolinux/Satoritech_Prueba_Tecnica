<template>
    <CardLayout>

        <CategoryForm :key="item" :isUpdate="true" textLabel="Actualizar categoria" textCancel="Regresar a la lista" @cancel="redirecUser()" @send="updateCategory"  :category="category"  />
    </CardLayout>
    
</template>

<script lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import CategoryForm from '@/components/CategoryForm.vue';
import type { Category } from '@/types/objects';
import {update,getCategory } from '@/api/category';



export default {
    name: 'EditCategory',
    components: {
        CardLayout,
        CategoryForm
    },
    data():{
        category: Category,
        item: number
    } {
        return {
            category: {
                name: '',
                description: ''
            },
            item: 0
        }
    },
    mounted() {
      this.getCurrentCategory();
    },
    methods: {
        redirecUser(){
            this.$router.push({name: 'category-list'})
        },
        async updateCategory(data: Category){
            try {
                const response = await update(data);
                this.$router.push({name: 'category-list'})
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
        async getCurrentCategory(){
            try {
                const id = +this.$route.params.id;
                const response = await getCategory(id);
                console.log(response)
                if(response.data.category){
                    this.category = response.data.category;
                    this.item++;
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>