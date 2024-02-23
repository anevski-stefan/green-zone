<template>
  <div>
    <h1 class="text-4xl text-cenclassNameb-8 text-gray-900 uppercase tracking-wider mt-5">Register</h1>
    <Register/>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";

export default {
  components: {
    Register
  },

  async fetch() {
    try {
      const response = await this.$fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: "fname",
          last_name: "lname"
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

