<template>
  <body class="bg-cover">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <!-- Other page content goes here -->
        <div class="container flex flex-col gap-1 mx-auto p-5">
          <WorkoutCard
            header="Best Quarantine Workout"
            energy="500 kcal"
            time="50 min"
            info
            :bg-image="bgImage"
          />
          <!-- Challenge Section -->
          <p class="my-5 font-bold text-lg">Challenge</p>
          <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-3 snap-mandatory min-w-max">
              <SquareCard :text="'Card 1'" :icon="fire" :index="0" />
              <SquareCard :text="'Card 2'" :icon="sprint" :index="1" />
              <SquareCard :text="'Card 3'" :icon="squat" :index="2" />
            </div>
          </div>
          <!-- Fast Warmup -->
          <p class="my-5 font-bold text-lg">Fast Warmup</p>
          <div class="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-3 snap-mandatory min-w-max">
              <ExerciseCard
                header="Leg exercises"
                time="10 min"
                level="Beginner"
                :image="bgImage"
              />
              <ExerciseCard
                header="Backward lunges"
                time="10 min"
                level="Beginner"
                :image="bgImage"
              />
            </div>
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
import SquareCard from "../components/card/SquareCard.vue";
import WorkoutCard from "~/components/card/WorkoutCard.vue";
import bgImage from "../assets/images/onboarding.png";
import fire from "../assets/icons/fire.svg";
import sprint from "../assets/icons/sprint.svg";
import squat from "../assets/icons/squat.svg";
import ExerciseCard from "../components/card/ExerciseCard.vue";

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
    ExerciseCard,
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
