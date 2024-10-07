<template>
  <div class="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
    <img
      :src="image"
      alt="Workout Image"
      class="w-20 h-20 rounded-md object-cover"
    />
    <div class="flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-900">{{ header }}</h2>

        <span
          class="text-sm bg-gray-800 text-white rounded-b-lg -mt-8 px-2 py-1"
          >{{ difficulty }}</span
        >
      </div>
      <p class="text-sm text-gray-500">{{ description }}</p>
      <div class="mt-2">
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div
            class="bg-green-400 h-2.5 rounded-full"
            :style="{ width: status + '%' }"
          ></div>
        </div>
        <p class="text-sm text-gray-700 mt-1">{{ status }}%</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmallWorkoutCard",
  props: {
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
  },
});
</script>
