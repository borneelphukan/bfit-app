<template>
  <div class="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
    <img
      :src="image"
      alt="Warmup Image"
      class="w-20 h-20 rounded-md object-cover"
    />
    <div class="flex flex-col justify-center space-y-2 w-3/4">
      <h2 class="text-xl font-bold pb-1">{{ header }}</h2>
      <div
        class="inline-flex bg-gray-200 bg-opacity-75 px-2 py-1 rounded-lg max-w-max"
      >
        <p class="text-black text-sm flex items-center space-x-1 gap-1">
          {{ time }}
        </p>
      </div>
      <div
        class="inline-flex bg-gray-200 bg-opacity-75 px-2 py-1 rounded-lg max-w-max"
      >
        <p class="text-black text-sm flex items-center space-x-1 gap-1">
          {{ level }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExerciseCard",
  props: {
    header: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});
</script>
