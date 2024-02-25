<!-- pages/profile.vue -->
<template>
  <div class="min-h-screen mt-10">
    <h1 class="text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider">Profile</h1>
    <Profile/>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

definePageMeta({
  middleware: 'profile-middleware'
})

export default {
  components: {
    Profile
  },
}
</script>
