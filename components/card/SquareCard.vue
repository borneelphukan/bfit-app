<template>
  <div
    :class="[
      backgroundColor,
      'relative flex items-center justify-center rounded-lg w-40 h-40',
    ]"
  >
    <div class="absolute bottom-2 right-2 opacity-20">
      <img :src="icon" alt="icon" class="w-32 h-32 bottom-0 right-0" />
    </div>

    <div class="absolute bottom-0 left-0 m-2 bg-opacity-70 rounded p-2">
      <p :class="textColor" class="font-semibold text-2xl">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SquareCard",
  props: {
    text: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundColor() {
      const colors = ["bg-lime-500", "bg-gray-800", "bg-gray-200"];
      return colors[this.index % colors.length];
    },
    textColor() {
      return this.backgroundColor === "bg-gray-800"
        ? "text-white"
        : "text-black";
    },
  },
});
</script>
