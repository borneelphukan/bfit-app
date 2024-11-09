<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-6 lg:px-8"
  >
    <div class="w-full max-w-md mb-10">
      <img
        class="mx-auto h-12 w-auto mb-10"
        src="../assets/images/onboarding.png"
        alt="Golf Post"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        or
        <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500">
          create an account for free
        </a>
      </p>
    </div>

    <div class="mt-8 w-full max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="signin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Your email address"
                v-model="emailAddress"
                required
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Your password"
                v-model="password"
                required
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div class="flex items-center justify-end">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button type="secondary" width="large" @click="handleButtonClick">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Authenticate",
  setup() {
    const emailAddress = ref("");
    const password = ref("");
    const router = useRouter();
    const handleButtonClick = () => {
      router.push("/home");
    };

    const signin = () => {
      // Handle login logic here
      console.log("Logging in with:", emailAddress.value, password.value);
    };

    return {
      emailAddress,
      handleButtonClick,
      password,
      signin,
    };
  },
});
</script>
