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
      <LineChart :data="lineChartData" :options="chartOptions" />
    </div>

    <div v-if="sleepChart" class="mt-2">
      <BarChart :data="barChartData" :options="barChartOptions" />
    </div>

    <div v-if="map" class="h-24 mt-2 rounded-lg">
      <!-- Add map content here, if available -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Line } from "vue-chartjs";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { ChartData } from "chart.js";

import cycle from "../../assets/icons/cycle.svg";
import heart from "../../assets/icons/heart.svg";
import steps from "../../assets/icons/steps.svg";
import sleep from "../../assets/icons/sleep.svg";
import water from "../../assets/icons/drop.svg";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  components: {
    LineChart: Line,
    BarChart: Bar,
  },
  props: {
    title: { type: String, required: true },
    value: { type: String, required: false },
    icon: { type: String, required: false },
    chart: { type: Boolean, default: false },
    sleepChart: { type: Boolean, default: false },
    map: { type: Boolean, default: false },
    barGraphData: { type: Array as () => number[], default: () => [] },
    heartRateData: { type: Array as () => number[], default: () => [] },
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
    lineChartData(): ChartData<"line"> {
      // Only return line chart data when chart is true
      if (this.chart) {
        return {
          labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Heart Rate",
              data: this.heartRateData,
              borderColor: "#ff6363",
              fill: false,
              tension: 0.4,
              borderWidth: 2,
            },
          ],
        } as ChartData<"line">;
      }
      return { labels: [], datasets: [] };
    },
    barChartData(): ChartData<"bar"> {
      // Only return bar chart data when sleepChart is true
      if (this.sleepChart) {
        const validData = this.barGraphData.filter(
          (value) => value !== undefined && value !== null
        );

        return {
          labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Sleep Hours",
              data: validData,
              backgroundColor: "#7c3aed",
              borderRadius: 4,
              borderWidth: 1,
            },
          ],
        } as ChartData<"bar">;
      }
      return { labels: [], datasets: [] };
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
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: { raw: any }) => `${tooltipItem.raw} BPM`,
            },
          },
        },
      };
    },
    barChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };
    },
  },
});
</script>

<style scoped>
div[style*="height"] {
  height: 200px;
}
</style>
