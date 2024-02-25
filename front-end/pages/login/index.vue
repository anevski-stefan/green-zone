<template>
  <div class="mt-10">
    <Login/>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

definePageMeta({
  middleware: 'auth-middleware'
})

export default {
  components: {
    Login
  },
};

</script>