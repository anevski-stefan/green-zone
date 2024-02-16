<template>

  <div class="container">
    <div class="header bg-green-800 text-black flex justify-between p-2">
      <div class="logo flex items-center">
        <img src="../public/images/posts/neom-HYtBA9xDyfg-unsplash.jpg" alt="profile_picture" class="w-12 h-12 mr-2">
        <span class="logo-text text-xl font-bold">GreenZone</span>
      </div>
      <div class="info text-right">
        <p>Name: John</p>
        <p>Lastname: Doe</p>
        <p>Email: johndoe23@gmail.com</p>
        <p>Interests: recycling, camping</p>
        <p>Points: 25.5</p>
      </div>
    </div>

    <div class="content bg-green-300 p-4">
      <p class="about-me text-white text-lg">
        About me:<br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Profile v-if="profile" :user="profile"/>
    </div>
  </div>
</template>

<style>
/* Your style code here */
</style>