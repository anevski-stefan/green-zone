<template>
  <div class="container">
    <div class="header text-black flex justify-between p-2" >
      <div class="logo flex items-center">
        <img src="../public/images/posts/profile_picture.png" alt="profile_picture" class="w-60 h-70 mr-2 rounded-full">
<!--        <span class="logo-text text-xl font-bold">GreenZone</span>-->
      </div>
      <div class="info bg-amber-100 rounded-lg p-6" style="margin-right: auto; border-radius: 6rem; padding-right: 30rem; margin-top: 6rem;">
        <p class="text-left font-bold" style="padding: 25px;">
          Name: John<br>
          Lastname: Doe<br>
          Email: johndoe23@gmail.com<br>
          Interests: recycling, camping, hiking, gardening<br>
          Points: 25.4<br>
        </p>
      </div>
    </div>

    <div class="content bg-amber-100 p-4" style="border-radius: 6rem; margin-top: 4rem;">
      <p class="about-me bg-amber-100 text-base" style="border-radius: 6rem;">
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
.container {
  background-color: rgb(150, 192, 177);
  position: relative;
}

.profile-picture {
  width: 208px;
  height: 210px;
  position: absolute;
  top: 205px;
  left: 70px;
}
</style>
