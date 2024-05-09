<template>
    <CardLayout>

        <ProductForm :key="item" :isUpdate="true" textLabel="Actualizar Producto" textCancel="Regresar a la lista" @cancel="redirecUser()" @send="updateProduct"  :product="product"  />
    </CardLayout>
    
</template>

<script lang="ts">
import CardLayout from '@/components/CardLayout.vue';
import ProductForm from '@/components/ProductForm.vue';
import type { Product } from '@/types/objects';
import {updateProduct,getProduct } from '@/api/products';



export default {
    name: 'EditProduct',
    components: {
        CardLayout,
        ProductForm
    },
    data():{
        product: Product,
        item: number
    } {
        return {
            product: {
                name: '',
                stock: 0,
                image: undefined,
                cualification: 0,
                image_url: ''
            },
            item: 0
        }
    },
    mounted() {
      this.getCurrentProduct();
    },
    methods: {
        redirecUser(){
            this.$router.push({name: 'product-list'})
        },
        async updateProduct(data: Product){
            try {
                const response = await updateProduct(data);
                this.$router.push({name: 'product-list'})
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
        async getCurrentProduct(){
            try {
                const id = this.$route.params.id;
                const response = await getProduct(id.toString());
                console.log(response)
                if(response.data){
                    this.product = response.data;
                    this.item++;
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>