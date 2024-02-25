<script setup>
import Post from "~/components/Post.vue";

const {data: posts} = await useAsyncData('posts', () =>
    queryContent('/posts').find()
)
</script>
<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl text-center pt-7 text-gray-900 uppercase tracking-wider mt-5">POSTS & RECYCLING TIPS</h1>
    <section class="grid md:grid-cols-3 mt-8 gap-10 pt-5">
      <Post :posts="posts"/>
    </section>
  </div>
</template>
