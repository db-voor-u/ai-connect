<script setup>

const { data:posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
);
</script>

<template>
<h1 class="text-3xl my-8">Dit is een blog </h1>

ik wat schrijven over de volgende onderwerpen:
vanuit pages/blog/index.vue


<section class="grid md:grid-cols-3 mt-8 gap-10">
    <Posts :posts="posts"/>
</section>

</template>