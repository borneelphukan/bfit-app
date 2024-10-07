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
            <img :src="fire" alt="fire" class="w-5 h-5 brightness-0" />
            {{ energy }}
          </p>
        </div>
        <div
          class="inline-flex bg-white bg-opacity-75 px-2 py-1 rounded-lg max-w-max"
        >
          <p class="text-black text-sm flex items-center space-x-1 gap-1">
            <img :src="watch" alt="watch" class="w-5 h-5 brightness-0" />
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
import fire from "../assets/icons/fire.svg";
import watch from "../assets/icons/watch.svg";

export default defineComponent({
  data() {
    return {
      fire,
      watch,
    };
  },
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
