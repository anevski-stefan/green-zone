<template>

  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../../front-end/public/images/posts/profile_picture.png" alt="profile_picture">
        <span class="logo-text">GreenZone</span>
      </div>
      <div class="info">
        <p>Name: John</p>
        <p>Lastname: Doe</p>
        <p>Email: johndoe23@gmail.com</p>
        <p>Interests: recycling, camping</p>
        <p>Points: 25.5</p>
      </div>
    </div>

    <div class="content">
      <p class="about-me">
        About me:<br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Profile v-if="profile" :user="profile" />
    </div>
  </div>
</template>

<script setup>

import profile from "~/pages/profile/index.vue";



</script>

<style>
.container {
  font-family: Arial, sans-serif;
}

.header {
  background-color: #285C49;
  color: #000;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.logo-text {
  font-size: 18px;
}

.info {
  text-align: right;
}

.content {
  background-color: #96C0B1;
  padding: 20px;
}

.about-me {
  color: #FEFAE4;
  font-size: 16px;
}
</style>
