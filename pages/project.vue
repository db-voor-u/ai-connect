<script setup>
const query = gql`
{
  viewer {
    repositories(first:5, orderBy: {field:CREATED_AT, direction:DESC}) {
      edges {
        node {
          id
          name
          createdAt
          description
          url
        }
      }
    }
  }
}
`;

const { data } = await useAsyncQuery(query);

</script>

<template>
  <h1 class="text-3xl my-8">Projecten</h1>
  <p class="text-lg mb-8">Hier zijn mijn aantal projecten bij Github</p>


    <section class="grid md:grid-cols-2 gap-10 ">
    <div v-for="project in data?.viewer.repositories.edges" :key="project.id" class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
       <a :href="project.node.url" target="_blank">
        <h2 class="text-2xl text-indigo-700 font-semibold mb-2 hover:underline">
          {{ project.node.name }}
        </h2>
      </a>
      <p>{{ project.node.description  }}</p>
      </div> 
      
      
    </section>
  
  </template>
  