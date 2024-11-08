<template>
  <div :class="['p-4 rounded-lg', backgroundColor]">
    <div v-if="title" class="flex items-center text-lg font-semibold">
      <img v-if="iconPath" :src="iconPath" alt="icon" class="w-6 h-6 mr-2" />
      {{ title }}
    </div>
    <div v-if="value" class="text-2xl font-bold mt-2">
      {{ value }}
    </div>

    <div v-if="chart" class="mt-2">
      <!-- Add chart content here, if available -->
    </div>
    <div v-if="sleepChart" class="flex mt-2 space-x-1">
      <!-- Add sleep chart content here, if available -->
    </div>
    <div v-if="map" class="h-24 mt-2 rounded-lg">
      <!-- Add map content here, if available -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cycle from "../../assets/icons/cycle.svg";
import heart from "../../assets/icons/heart.svg";
import steps from "../../assets/icons/steps.svg";
import sleep from "../../assets/icons/sleep.svg";
import water from "../../assets/icons/drop.svg";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    value: { type: String, required: false },
    icon: { type: String, required: false },
    chart: { type: Boolean, default: false },
    sleepChart: { type: Boolean, default: false },
    map: { type: Boolean, default: false },
  },
  computed: {
    backgroundColor() {
      switch (this.title) {
        case "Training Time":
            return "bg-indigo-100"
        case "Heart Rate":
          return "bg-red-100";
        case "Water":
          return "bg-blue-100";
        case "Sleep":
          return "bg-purple-100";
        case "Steps":
          return "bg-yellow-100";
        case "Cycling":
          return "bg-gray-800 text-white";
        default:
          return "bg-gray-100";
      }
    },
    iconPath() {
      switch (this.icon) {
        case "cycling":
          return cycle;
        case "heart":
          return heart;
        case "steps":
          return steps;
        case "sleep":
          return sleep;
        case "drop":
          return water;
        default:
          return "";
      }
    },
  },
});
</script>