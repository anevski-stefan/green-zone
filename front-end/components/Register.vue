<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-xs">
      <h2 class="text-2xl mb-4 text-center">Register</h2>
      <form @submit.prevent="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input v-model="credentials.username" id="username" type="text" placeholder="Username" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input v-model="credentials.email" id="email" type="email" placeholder="Email" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input v-model="credentials.password" id="password" type="password" placeholder="Password" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Register
        </button>
        <div v-if="errorMessage" class="text-red-500 text-xs mt-2">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        username: '',
        email: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:8080/users/add', this.credentials);
        console.log(response);
        if (response.status === 200) {
          console.log('Registration successful');
        } else {
          console.error('Registration failed:', response.statusText);
          this.errorMessage = 'Registration failed. Please try again later.';
        }
      } catch (error) {
        console.error('Error during registration:', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    }
  }
};
</script>
