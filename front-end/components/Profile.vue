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
        <div class="mt-6" v-if="user.aboutMe">
          <h2 class="text-lg font-semibold mb-2">About me:</h2>
          <p class="text-sm text-gray-700">{{ user.aboutMe }}</p>
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

export default {
  data() {
    return {
      user: null,
      loading: true
    };
  },
  beforeRouteEnter(to, from, next) {
    const userCookie = this.getCookie('user');
    if (userCookie) {
      next();
    } else {
      next({path: '/login'});
    }
  },
  mounted() {
    const userCookie = this.getCookie('user');
    if (userCookie) {
      this.user = JSON.parse(userCookie);
      this.loading = false;
    }
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    async logout() {
      try {
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        this.$router.push('/login');
        window.location.reload();
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
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
