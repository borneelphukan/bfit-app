<template>
  <div class="w-full max-w-md mx-auto">
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M16.4 9.4a7 7 0 11-13.8 0 7 7 0 0113.8 0z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-200 text-secondary-300 placeholder-secondary-200 focus:ring-primary-green focus:border-primary-green"
        placeholder="Search"
        v-model="searchQuery"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBar",
  setup() {
    const searchQuery = ref("");

    const handleInput = () => {
      // Handle the search input logic here
      console.log(searchQuery.value);
    };

    return {
      searchQuery,
      handleInput,
    };
  },
});
</script>
