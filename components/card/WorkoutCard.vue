<template>
  <div
    class="relative w-full h-52 rounded-3xl overflow-hidden bg-cover bg-center shadow-lg"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative flex items-center h-full p-6 text-white">
      <!-- Left Column: Text -->
      <div class="flex flex-col justify-center space-y-2 w-3/4">
        <h2 class="text-xl font-bold pb-2">{{ header }}</h2>
        <div
          class="inline-flex bg-white bg-opacity-75 px-2 py-1 rounded-lg max-w-max"
        >
          <p class="text-black text-sm flex items-center space-x-1 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            {{ energy }}
          </p>
        </div>
        <div
          class="inline-flex bg-white bg-opacity-75 px-2 py-1 rounded-lg max-w-max"
        >
          <p class="text-black text-sm flex items-center space-x-1 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {{ time }}
          </p>
        </div>
      </div>
      <!-- Right Column: Play Button -->
      <div class="flex justify-center items-center w-1/4">
        <button
          class="bg-primary-green text-black rounded-full h-12 w-12 flex items-center justify-center shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkoutCard",
  props: {
    header: {
      type: String,
      required: true,
    },
    energy: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
  },
});
</script>
