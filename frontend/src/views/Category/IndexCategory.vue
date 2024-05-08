<template>
    <CardLayout>

        <RouterView />
    </CardLayout>
    
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
export default {
    name: 'indexCategory',
    components: {
        RouterView,
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

    }
}
</script>