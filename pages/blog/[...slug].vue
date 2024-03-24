<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
return queryContent()
.where({ _path: path })
.findOne()
});

</script>
<template>
       <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-5xl"/>
       <div class="my-8">
        <a v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`" class="inline-block bg-blue-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded-lg mr-2">
          <Icon name="uil:home"  size="1rem" class=" text-neutral-600 mr-2 mb-1"/>{{ tag }}
        
        </a>

       </div>

 </template>
  