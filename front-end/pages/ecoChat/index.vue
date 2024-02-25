<script>
import ChatBot from "@/components/ChatBot.vue";

definePageMeta({
  middleware: 'eco-chat-middleware'
})

export default {
  components: {
    ChatBot
  }
};
</script>

<template>
  <div>
    <h1 class="text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider mt-5">Eco Chat</h1>
    <ChatBot/>
  </div>
</template>


