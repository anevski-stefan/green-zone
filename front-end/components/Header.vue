<template>
  <Disclosure as="nav" class="bg-green-950" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-shrink-0 items-center">
          <h2><a class="text-white cursor-pointer" href="/">Green Zone</a></h2>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
               :class="[item.current ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-800 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
               :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            <template v-if="hasUserCookie && hasAccessToken">
              <a :href="profileLink"
                 class="text-gray-300 hover:bg-green-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                 :aria-current="route.name === 'profile' ? 'page' : undefined">Profile</a>
              <button @click="logout"
                      class="text-gray-300 hover:bg-green-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Logout
              </button>
            </template>
            <template v-else-if="isAuthenticated">
              <a href="/login"
                 class="text-gray-300 hover:bg-green-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                 :aria-current="route.name === 'login' ? 'page' : undefined">Login</a>
              <a href="/register"
                 class="text-gray-300 hover:bg-green-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                 :aria-current="route.name === 'register' ? 'page' : undefined">Register</a>
            </template>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-white">
            <span class="absolute -inset-0.5"/>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-800 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
           :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        <template v-if="hasUserCookie && hasAccessToken">
          <button @click="logout"
                  class="text-gray-300 hover:bg-green-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Logout
          </button>
        </template>
        <template v-else-if="isAuthenticated">
          <a href="/login"
             class="text-gray-300 hover:bg-green-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
             :aria-current="route.name === 'login' ? 'page' : undefined">Login</a>
          <a href="/register"
             class="text-gray-300 hover:bg-green-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
             :aria-current="route.name === 'register' ? 'page' : undefined">Register</a>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {useRoute} from "vue-router";
import {useCookie} from 'nuxt/app'

const accessTokenCookie = useCookie('accessToken');
const userCookie = useCookie("user");

const hasAccessToken = Boolean(accessTokenCookie.value)
const hasUserCookie = Boolean(userCookie.value)

const isAuthenticated = () => {
  return hasUserCookie && hasUserCookie;
}

const route = useRoute();
const navigation = [
  {name: 'Home', href: '/', current: route.name == 'index'},
  {name: 'Posts', href: '/posts', current: route.name == 'posts'},
  {name: 'EcoChat', href: '/ecoChat', current: route.name == 'ecoChat'},
  {name: 'Where to recycle?', href: '/recyclePlaces', current: route.name == 'recyclePlaces'},
  {name: 'About us', href: '/aboutUs', current: route.name == 'aboutUs'},
];

const logout = async () => {
  const config = useRuntimeConfig();

  try {
    const accessToken = getCookie('accessToken');

    // const response = await fetch('http://localhost:8080/auth/logout', { // Local
    const response = await fetch(config.public.production_base_url+'/auth/logout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.ok) {
      document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.location.href = '/';
      window.location.reload();
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
}

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const profileLink = hasUserCookie && hasAccessToken ? "/profile" : "/login";
</script>
