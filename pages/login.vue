<template>
  <div class="relative w-full">
    <img
      src="@/assets/images/onboarding.webp"
      class="w-full h-full object-cover"
      alt="Onboarding Image"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70"
    ></div>
  </div>

  <div class="container mx-auto py-12 p-5 md:p-10 lg:p-16">
    <h2
      class="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8"
    >
      Login or Register
    </h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-8">
        <TextField
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username"
          required
        />
      </div>

      <div class="mb-2">
        <TextField
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div class="flex items-center justify-between mb-12">
        <router-link to="/forgot-password" class="text-sm text-secondary-blue">
          Forgot Password?
        </router-link>
      </div>
      <Button type="primary" width="large" @click="handleLogin"> Login </Button>
      <p class="mt-8 text-center text-sm text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-primary-blue font-semibold">
          Register
        </router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/button/Button.vue";
import TextField from "~/components/inputs/TextField.vue";

export default defineComponent({
  components: {
    Button,
    TextField,
  },
  mounted() {
    document.title = "BFit";
  },
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const savePassword = ref(false);

    const handleLogin = () => {
      router.push("/home");
    };

    return {
      username,
      password,
      savePassword,
      handleLogin,
    };
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
