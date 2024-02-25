<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md">
      <form @submit.prevent="register" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
          <input v-model="credentials.name" id="name" name="name" type="text" placeholder="Name" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input v-model="credentials.username" id="username" name="username" type="text" placeholder="Username"
                 required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input v-model="credentials.email" id="email" name="email" type="email" placeholder="Email" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input v-model="credentials.password" id="password" name="password" type="password" placeholder="Password"
                 required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Register
        </button>
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
        name: '',
        username: '',
        email: '',
        password: '',
      },
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      const config = useRuntimeConfig();
      try {
        // const response = await axios.post('http://localhost:8080/auth/signup', this.credentials); // Local
        const response = await axios.post(config.public.production_base_url+'/auth/signup', this.credentials);
        if (response.status === 201) {
          const {accessToken, user} = response.data;

          document.cookie = `accessToken=${accessToken}; path=/`;
          document.cookie = `user=${JSON.stringify(user)}; path=/`;

          this.$router.push('/successRegistration');
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

