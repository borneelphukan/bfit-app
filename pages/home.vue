<template>
  <body class="bg-cover">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <!-- Other page content goes here -->
        <div class="container flex flex-col gap-1 mx-auto p-5">
          <p class="mt-3">Good {{ greeting }}</p>
          <p class="font-bold text-2xl mb-5">Borneel B. Phukan</p>

          <SearchBar />

          <p class="my-5 font-bold text-lg">Popular Workouts</p>
          <!-- Workout Cards -->
          <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-3 snap-mandatory min-w-max">
              <WorkoutCard
                header="Lower Body Training"
                energy="500 kcal"
                time="50 min"
                :bg-image="bgImage"
              />
              <WorkoutCard
                header="Upper Body Training"
                energy="450 kcal"
                time="45 min"
                :bg-image="bgImage"
              />
            </div>
          </div>

          <p class="my-5 font-bold text-lg">Today Plan</p>

          <!-- Vertically Arranged SmallWorkoutCard Components -->
          <div class="flex flex-col space-y-3">
            <SmallWorkoutCard
              header="Push Up"
              description="100 Push up a day"
              difficulty="Intermediate"
              :image="workoutImage"
              :status="45"
            />
            <SmallWorkoutCard
              header="Sit Up"
              description="80 Sit up a day"
              difficulty="Beginner"
              :image="workoutImage"
              :status="60"
            />
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
import SearchBar from "../components/layout/SearchBar.vue";
import WorkoutCard from "../components/card/WorkoutCard.vue";
import SmallWorkoutCard from "../components/card/SmallWorkoutCard.vue"; // Import SmallWorkoutCard

// Import the image
import bgImage from "../assets/images/onboarding.png";
import workoutImage from "../assets/images/onboarding.png";

export default defineComponent({
  data() {
    return {
      greeting: "",
      bgImage,
      workoutImage, // Add the workout image to the data
    };
  },
  components: {
    Navbar,
    SearchBar,
    WorkoutCard,
    SmallWorkoutCard, // Register SmallWorkoutCard
  },
  mounted() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = " Morning 🔥";
    } else if (hour < 18) {
      this.greeting = " Afternoon 🔥";
    } else {
      this.greeting = " Evening 🔥";
    }
    document.title = "BFit - Your Personal Fitness Tracker";
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
