<template>
  <div>
    <h1 class="text-4xl text-cenclassNameb-8 text-gray-900 uppercase tracking-wider mt-5">Login</h1>
    <Login/>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  components: {
    Login
  },
  async fetch() {
    try {
      const response = await this.$fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'email',
          password: 'password'
        }),
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
};

</script>