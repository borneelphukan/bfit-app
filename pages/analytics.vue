<template>
  <body class="bg-cover">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <div class="container flex flex-col gap-1 mx-auto p-5">
          <!-- Month and Year Section -->
          <p class="my-5 font-bold text-lg">{{ currentMonthYear }}</p>

          <!-- Week Calendar Section -->
          <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-3 snap-mandatory min-w-max">
              <div class="flex space-x-3">
                <div
                  v-for="(day, index) in weekDays"
                  :key="index"
                  :class="[
                    'px-4 py-2 rounded-lg text-center',
                    {
                      'bg-black text-white': day.name === todayName,
                      'bg-lime-500': day.name !== todayName,
                    },
                  ]"
                >
                  <p>{{ day.name }}</p>
                  <p>{{ day.date }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Today Report Section -->
          <p class="my-5 font-bold text-lg">Today Report</p>
          <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
            <!-- Health Cards Column -->
            <div class="flex flex-col">
              <HealthCard
                title="Active Calories"
                value="645 Cal"
                class="mb-2"
              />
              <HealthCard title="Training Time" value="1:34:09" class="mt-2" />
            </div>

            <!-- Cycling Card Column -->
            <div class="flex flex-col">
              <HealthCard title="Cycling" icon="cycle" map class="flex-grow" />
            </div>

            <!-- Other Health Cards -->
            <HealthCard
              title="Heart Rate"
              value="79 Bpm"
              icon="heart"
              chart
              :heartRateData="[72, 78, 98, 74, 110, 80, 78, 105, 98, 89, 67]"
            />
            <HealthCard
              title="Steps"
              :steps="true"
              :stepsDataArray="[1100, 100]"
              icon="steps"
              value="1100/1200"
            />
            <HealthCard
              title="Sleep"
              value="8 hrs"
              icon="sleep"
              :sleepChart="true"
              :barGraphData="[6, 4, 8, 10, 5, 6, 8]"
            />

            <HealthCard title="Water" icon="drop" value="6/8 Cups" />
          </div>
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
import Navbar from "../components/layout/Navbar.vue";
import HealthCard from "~/components/card/HealthCard.vue";

export default defineComponent({
  components: {
    Navbar,
    HealthCard,
  },
  data() {
    const todayDate = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = ["Su", "M", "T", "W", "T", "F", "Sa"];

    const currentMonthYear = `${
      monthNames[todayDate.getMonth()]
    } ${todayDate.getFullYear()}`;

    const todayName = dayNames[todayDate.getDay()];

    const startOfWeek = new Date(todayDate);
    startOfWeek.setDate(todayDate.getDate() - todayDate.getDay());
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        name: dayNames[i],
        date: date.getDate(),
      };
    });

    return {
      currentMonthYear,
      todayName,
      weekDays,
    };
  },
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
