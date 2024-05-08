<template>
    <div>
        <v-row  class="mt-4 ">
            <v-col cols="12" md="1"></v-col>
            <v-col cols="12" class="bg-white" md="10">
                <slot>

                </slot>
            </v-col>
            <v-col cols="12" md="1"></v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CardLayout',


}
</script>
