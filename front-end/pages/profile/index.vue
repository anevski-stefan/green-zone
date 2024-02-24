<template>
  <div class="bg-gray-100 min-h-screen">
    <h1 class="text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider">Profile</h1>
    <Profile/>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Profile
  }
}
</script>
