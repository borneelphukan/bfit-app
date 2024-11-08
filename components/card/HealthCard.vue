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

    <div v-if="sleepChart" class="mt-2">
      <!-- Render Chart.js Bar chart for sleep data -->
      <BarChart :data="chartData" :options="chartOptions" />
    </div>

    <div v-if="map" class="h-24 mt-2 rounded-lg">
      <!-- Add map content here, if available -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { ChartData } from "chart.js"; // Import ChartData as a type

import cycle from "../../assets/icons/cycle.svg";
import heart from "../../assets/icons/heart.svg";
import steps from "../../assets/icons/steps.svg";
import sleep from "../../assets/icons/sleep.svg";
import water from "../../assets/icons/drop.svg";

// Register necessary chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  components: {
    BarChart: Bar, // Register Bar component from vue-chartjs
  },
  props: {
    title: { type: String, required: true },
    value: { type: String, required: false },
    icon: { type: String, required: false },
    chart: { type: Boolean, default: false },
    sleepChart: { type: Boolean, default: false }, // Define sleepChart prop
    map: { type: Boolean, default: false },
    barGraphData: { type: Array as () => number[], default: () => [] }, // Explicitly type as number[]
  },
  computed: {
    backgroundColor() {
      switch (this.title) {
        case "Training Time":
          return "bg-indigo-100";
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
    chartData(): ChartData<"bar"> {
      // Explicitly type as ChartData<"bar">
      return {
        labels: this.barGraphData.map((_, index) => `Day ${index + 1}`), // Create labels for the chart
        datasets: [
          {
            label: "Sleep Hours",
            data: this.barGraphData, // Data for the bars (sleep hours)
            backgroundColor: "#7c3aed", // Color for the bars
            borderRadius: 4, // Rounded corners for bars
            borderWidth: 1,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: { raw: any }) => `${tooltipItem.raw} hrs`, // Display hours in tooltip
            },
          },
        },
      };
    },
  },
});
</script>

<style scoped>
/* You can add custom styles for your chart here */
div[style*="height"] {
  height: 200px; /* Set a fixed height for the chart */
}
</style>
