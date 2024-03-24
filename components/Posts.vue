<script setup>
const props = defineProps(['posts']);
</script>


<template>
    <div v-for="post in props.posts" :key="post.slug" class="my-8 py-4 border-b-4 rounded-lg shadow-md overflow-hidden bg-green-50 hover:opacity-25">
      <NuxtLink :to="post._path">
        <img :src="`/images/blog/${post.cover}`" :alt="post.title" class="w-full h-48 object-contain object-center">
    </NuxtLink>
 <div class="p-6">
<h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
<p class=" text-neutral-600 mb-4">{{ post.description }}</p>
<NuxtLink :to="post._path" class="text-purple-600 font-bold">Lees meer</NuxtLink>
</div>
    </div>
 
</template>