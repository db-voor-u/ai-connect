<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Callout'
    }
});

</script>

<template>
    <div class="bg-teal-100 border-4 border-teal-500 rounded-md text-black px-4 py-4 shadow-sm" role="alert">
        <div class="flex">

            <div class="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>
           
            </div>
            <div>
                <p class="font-bold">{{ props.title }}</p>
                <p class="text-sm "></p>
                <slot />
            </div>
        </div>
    
        

    </div>
  </template>