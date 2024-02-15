<template>
  <div>
    <h1 class="text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider mt-5">Eco Chat</h1>
    <!-- Styled with Tailwind CSS -->
    <Chatbot />
  </div>
</template>

<script>
import Chatbot from "@/components/Chatbot.vue";

export default {
  components: {
    Chatbot
  }
};
</script>
