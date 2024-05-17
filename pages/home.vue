<template>
  <body class="bg-cover">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <!-- Other page content goes here -->
        <div class="container flex flex-col gap-1 mx-auto p-5">
          <p class="mt-3">Good {{ greeting }}</p>
          <p class="font-bold text-2xl mb-5">Pramuditya Uzumaki</p>
          <SearchBar />
          <p class="my-5 font-bold text-lg">Popular Workouts</p>
        </div>
      </div>
      <div class="container mx-auto p-5 md:p-10 lg:p-16">
        <Navbar />
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navigation.vue";
import SearchBar from "../components/SearchBar.vue";

export default defineComponent({
  data() {
    return {
      greeting: "",
    };
  },
  components: {
    Navbar,
    SearchBar,
  },
  mounted() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = " Morning 🔥";
    } else if (hour < 18) {
      this.greeting = " Afternoon 🔥";
    } else {
      this.greeting = " Evening 🔥";
    }
    document.title = "BFit - Your Personal Fitness Tracker";
  },
});
</script>
