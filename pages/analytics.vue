<template>
  <body class="bg-cover">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <!-- Other page content goes here -->
        <div class="container flex flex-col gap-1 mx-auto p-5">
          <!-- Challenge Section -->
          <p class="my-5 font-bold text-lg">Month, Year</p>
          <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-3 snap-mandatory min-w-max">
              <!-- A week of calendar cards -->
            </div>
          </div>
          <!-- Today Report -->
          <p class="my-5 font-bold text-lg">Today Report</p>
          <!-- Health Cards -->
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
import SquareCard from "../components/card/SquareCard.vue";
import WorkoutCard from "~/components/card/WorkoutCard.vue";
import bgImage from "../assets/images/onboarding.png";
import fire from "../assets/icons/fire.svg";
import sprint from "../assets/icons/sprint.svg";
import squat from "../assets/icons/squat.svg";
import WarmupCard from "~/components/card/WarmupCard.vue";

export default defineComponent({
  data() {
    return {
      bgImage,
      fire,
      sprint,
      squat,
    };
  },
  components: {
    Navbar,
    SquareCard,
    WorkoutCard,
    WarmupCard,
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
