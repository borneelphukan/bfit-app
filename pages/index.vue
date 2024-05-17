<template>
  <div class="relative w-full h-auto md:h-1/4-screen">
    <img
      src="@/assets/images/onboarding.png"
      class="w-full h-full object-cover"
      alt="Onboarding Image"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70"
    ></div>
  </div>
  <div class="container mx-auto p-5 md:p-10 lg:p-16">
    <!-- Header -->
    <h1 class="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold">
      Wherever You Are
    </h1>
    <h1 class="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold">
      <span class="bg-primary-green">Health</span> Is Number One
    </h1>
    <!-- Tagline -->
    <p class="my-5 text-center text-sm sm:text-base md:text-lg lg:text-xl text-secondary-300">
      There is no instant way to a healthy life
    </p>

    <!-- Small bar -->
    <div
      class="mb-10 mt-7 mx-auto w-1/6 sm:w-1/3 md:w-1/4 lg:w-1/6 h-2 border border-primary-black rounded-full bg-primary-black"
    >
      <div class="w-[25%] h-1.5 rounded-full bg-primary-green"></div>
    </div>

    <!-- Get Started Button -->
    <Button type="primary" width="large" @click="handleButtonClick">
      Get Started
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import Button from "../components/Button.vue";

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const handleButtonClick = () => {
      router.push('/home');
    };

    return { handleButtonClick };
  },
});
</script>
