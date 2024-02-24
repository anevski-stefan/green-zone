<template>
  <div class="mt-10">
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