<template>
  <nav
    class="fixed bottom-0 left-0 w-[95%] bg-black rounded-full flex items-center justify-around p-2 z-50 m-2 h-[6%]"
  >
    <!-- Home -->
    <router-link
      to="/home"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/home' ? 'bg-primary-green text-black' : 'text-white',
      ]"
    >
      <img :src="home" alt="Home" class="w-6 h-6" />
      <span v-if="activeLink === '/home'">Home</span>
    </router-link>

    <!-- Explore -->
    <router-link
      to="/explore"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/explore'
          ? 'bg-primary-green text-black'
          : 'text-white',
      ]"
    >
      <img :src="explore" alt="Explore" class="w-6 h-6" />
      <span v-if="activeLink === '/explore'">Explore</span>
    </router-link>

    <!-- Analytics -->
    <router-link
      to="/analytics"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/analytics'
          ? 'bg-primary-green text-black'
          : 'text-white',
      ]"
    >
      <img :src="analytics" alt="Analytics" class="w-6 h-6" />
      <span v-if="activeLink === '/analytics'">Analytics</span>
    </router-link>

    <!-- Profile -->
    <router-link
      to="/profile"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/profile'
          ? 'bg-primary-green text-black'
          : 'text-white',
      ]"
    >
      <img :src="profile" alt="Profile" class="w-6 h-6" />
      <span v-if="activeLink === '/profile'">Profile</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import explore from "@/assets/icons/explore.svg";
import home from "@/assets/icons/home.svg";
import profile from "@/assets/icons/profile.svg";
import analytics from "@/assets/icons/analytics.svg";

export default defineComponent({
  name: "Navbar",
  setup() {
    const activeLink = ref("/home");
    const route = useRoute();

    watch(
      () => route.path,
      (newPath) => {
        activeLink.value = newPath;
      },
      { immediate: true }
    );

    return { activeLink, explore, home, analytics, profile };
  },
});
</script>

<style scoped>
.nav-item {
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
