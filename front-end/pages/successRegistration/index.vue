<template>
  <div class="flex justify-center items-center mt-10">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">Registration Successful!</h1>
      <p class="text-gray-700">Thank you for registering.</p>
      <p class="text-gray-700" ref="countdown">Redirecting in 2 seconds...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdownSeconds: 2
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    countdown() {
      setInterval(() => {
        if (this.countdownSeconds > 0) {
          this.countdownSeconds--;
          this.$refs.countdown.innerText = `Redirecting in ${this.countdownSeconds} second${this.countdownSeconds !== 1 ? 's' : ''}...`;
        } else {
          clearInterval(this.countdownInterval);
          window.location.href = '/';
        }
      }, 1000);
    }
  }
};
</script>

<style>

</style>
