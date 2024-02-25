<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md">
      <form @submit.prevent="login" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-4xl uppercase tracking-wider text-center my-5">Login</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username or Email</label>
          <input v-model="username" id="username" name="username" type="text" placeholder="Username or Email" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input v-model="password" id="password" name="password" type="password" placeholder="Password" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Login
        </button>
        <div v-if="errorMessage" class="text-red-500 text-xs mt-2">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/auth/authenticate', {
          username: this.username,
          password: this.password
        });

        // Save access token and user data in cookies
        document.cookie = `accessToken=${response.data.accessToken}; path=/`;
        document.cookie = `user=${JSON.stringify(response.data.user)}; path=/`;

        // Handle successful login
        // For example, redirect to another page
        this.$router.push('/');
        window.location.reload();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Error 401: Unauthorized');
          this.errorMessage = 'Error 401: Unauthorized';
        } else {
          console.error('Login failed:', error);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
