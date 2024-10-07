<template>
  <nav class="bg-black rounded-full flex items-center justify-around p-2">
    <!-- Home -->
    <router-link
      to="/home"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/home' ? 'bg-primary-green text-black' : 'text-white',
      ]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7.53393C0 6.57062 0.462591 5.66591 1.24353 5.1019L7.24353 0.768563C8.29207 0.0112796 9.70793 0.0112797 10.7565 0.768563L16.7565 5.1019C17.5374 5.66591 18 6.57062 18 7.53393V16C18 17.1046 17.1046 18 16 18H11C10.4477 18 10 17.5523 10 17V14C10 13.4477 9.55229 13 9 13H6.25C5.69772 13 5.25 13.4477 5.25 14V17C5.25 17.5523 4.80228 18 4.25 18H2C0.89543 18 0 17.1046 0 16V7.53393Z"
          :fill="activeLink === '/home' ? '#192126' : 'white'"
        />
      </svg>
      <span v-if="activeLink === '/home'">Home</span>
    </router-link>

    <!-- Explore -->
    <router-link
      to="/explore"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/explore' ? 'bg-primary-green text-black' : 'text-white',
      ]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5357 6.70032C11.8074 6.33804 12.295 6.20999 12.7037 6.40493C15.3505 7.66718 17.1517 9.07211 18.6172 11.4299C18.8531 11.8093 18.7822 12.299 18.4663 12.615L14.7068 16.3744C13.1738 17.9074 10.7248 18.0185 9.05935 16.6306V16.6306C7.34499 15.2019 7.05049 12.6806 8.38944 10.8953L11.5357 6.70032Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M18.584 4.43512L11.9999 6.08117C15.3095 7.51353 17.3852 9.06205 18.9999 12.0812L19.8188 5.5293C19.906 4.83203 19.2658 4.26469 18.584 4.43512Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.4317 21.7862L15.6179 18.2278C15.8521 17.5251 15.6692 16.7503 15.1454 16.2265C15.0664 16.1474 14.937 16.1511 14.8611 16.2332C13.9666 17.2014 13.3326 17.6845 12.597 17.9321C12.2961 18.0334 12.1109 18.3582 12.2288 18.6529L13.4932 21.8138C13.6662 22.2463 14.2845 22.2281 14.4317 21.7862Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.37528 11.3935L5.41605 9.87316C6.41319 9.3746 7.58686 9.3746 8.584 9.87316C8.79327 9.9778 8.84505 10.253 8.68664 10.4252C7.87177 11.3109 7.32302 11.8551 7.10228 12.5429C7.01225 12.8234 6.74893 13.0393 6.45832 12.9909L2.51669 12.334C2.03904 12.2543 1.94217 11.6101 2.37528 11.3935Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0001 12.0812L7.00005 18.0812"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span v-if="activeLink === '/explore'">Explore</span>
    </router-link>

    <!-- Analytics -->
    <router-link
      to="/analytics"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/analytics' ? 'bg-primary-green text-black' : 'text-white',
      ]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 12C2.75 10.117 2.75072 8.75483 2.84742 7.68789C2.94319 6.63125 3.12833 5.93798 3.45337 5.375C3.91415 4.5769 4.5769 3.91415 5.375 3.45337C5.93798 3.12833 6.63125 2.94319 7.68789 2.84742C8.75483 2.75072 10.117 2.75 12 2.75C13.883 2.75 15.2452 2.75072 16.3121 2.84742C17.3687 2.94319 18.062 3.12833 18.625 3.45337C19.4231 3.91415 20.0858 4.5769 20.5466 5.375C20.8717 5.93798 21.0568 6.63125 21.1526 7.68789C21.2493 8.75483 21.25 10.117 21.25 12C21.25 13.883 21.2493 15.2452 21.1526 16.3121C21.0568 17.3687 20.8717 18.062 20.5466 18.625C20.0858 19.4231 19.4231 20.0858 18.625 20.5466C18.062 20.8717 17.3687 21.0568 16.3121 21.1526C15.2452 21.2493 13.883 21.25 12 21.25C10.117 21.25 8.75483 21.2493 7.68789 21.1526C6.63125 21.0568 5.93798 20.8717 5.375 20.5466C4.5769 20.0858 3.91415 19.4231 3.45337 18.625C3.12833 18.062 2.94319 17.3687 2.84742 16.3121C2.75072 15.2452 2.75 13.883 2.75 12Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M13.75 8.5C13.75 7.5335 14.5335 6.75 15.5 6.75C16.4665 6.75 17.25 7.5335 17.25 8.5V16.5C17.25 17.4665 16.4665 18.25 15.5 18.25C14.5335 18.25 13.75 17.4665 13.75 16.5V8.5Z"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M6.75 13.5C6.75 12.5335 7.5335 11.75 8.5 11.75C9.4665 11.75 10.25 12.5335 10.25 13.5V16.5C10.25 17.4665 9.4665 18.25 8.5 18.25C7.5335 18.25 6.75 17.4665 6.75 16.5V13.5Z"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>
      <span v-if="activeLink === '/analytics'">Analytics</span>
    </router-link>

    <!-- Profile -->
    <router-link
      to="/profile"
      :class="[
        'flex flex-row gap-2 items-center py-2 px-4 rounded-full',
        activeLink === '/profile' ? 'bg-primary-green text-black' : 'text-white',
      ]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="7" r="4" stroke="white" stroke-width="1.5" />
        <path
          d="M4 17.4135C4 16.681 4.34623 15.9907 4.99458 15.65C6.26288 14.9835 8.69434 14 12 14C15.3057 14 17.7371 14.9835 19.0054 15.65C19.6538 15.9907 20 16.681 20 17.4135V17.4135C20 18.2411 19.5565 19.0047 18.7851 19.3045C17.4663 19.8171 15.1234 20.5 12 20.5C8.8766 20.5 6.53365 19.8171 5.21492 19.3045C4.44353 19.0047 4 18.2411 4 17.4135V17.4135Z"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>
      <span v-if="activeLink === '/profile'">Profile</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Navbar",
  setup() {
    const activeLink = ref("/home"); // Default active link
    const route = useRoute();

    // Watch for changes in the route path and update activeLink accordingly
    watch(
      () => route.path,
      (newPath) => {
        activeLink.value = newPath;
      },
      { immediate: true }
    );

    return { activeLink };
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
