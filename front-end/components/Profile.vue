<template>
  <div>
    <div v-if="loading || !user" class="absolute inset-0 flex justify-center items-center">
      <p class="text-xl font-semibold">Loading...</p>
    </div>
    <div v-else-if="user" class="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div class="p-8">
        <div class="flex items-center">
          <img src="/images/posts/profile_picture.png" alt="profile-picture" class="w-24 h-24 rounded-full mr-6">
          <div>
            <p class="text-lg font-semibold">Name: {{ user.name }}</p>
            <p class="text-sm text-gray-600">Email: {{ user.email }}</p>
            <p class="text-sm text-gray-600">Points: {{ user.points }}</p>
          </div>
        </div>
        <div class="mt-6" v-if="user.aboutMeText">
          <h2 class="text-lg font-semibold mb-2">About me:</h2>
          <p class="text-sm text-gray-700">{{ user.aboutMeText }}</p>
        </div>
        <div class="mt-6" v-else>
          <p class="text-sm text-gray-700">No bio available</p>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center mt-[-50vh]">
      <p class="text-xl font-semibold">Loading...</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
      loading: true
    };
  },
  mounted() {
    axios.get('http://localhost:8080/users/user/1')
        .then(response => {
          this.user = response.data;
          this.loading = false; // Set loading to false when data is loaded
          console.log("User: ", response.data)
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
