<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      class="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-green"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: "",
    },
    type: {
      type: String as PropType<string>,
      default: "text",
    },
    placeholder: {
      type: String as PropType<string>,
      default: "",
    },
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
