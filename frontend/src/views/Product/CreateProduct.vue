<template>
    <CardLayout>

        <ProductForm :isUpdate="false" textLabel="Crear producto" textCancel="Regresar a la lista" @cancel="redirecUser()" @send="createCategory" />

    </CardLayout>
   
</template>

<script lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import ProductForm from '@/components/ProductForm.vue';
import type { Product } from '@/types/objects';
import { createProduct } from '@/api/products';
export default {
    name: 'CreateProduct',
    components: {
        CardLayout,
        ProductForm
    },
    data():{

    } {
        return {
            
      
        }
    },
    mounted() {
       
    },
    methods: {
        redirecUser(){
            this.$router.push({name: 'product-list'})
        },
        async createCategory(data: Product){
            try {
           
                const response = await createProduct(data);
            
                this.$router.push({name: 'product-list'})
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>