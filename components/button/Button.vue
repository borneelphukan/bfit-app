<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<"primary" | "secondary">,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String as PropType<"small" | "medium" | "large" | "">,
      default: "",
    },
  },

  setup(props, { emit }) {
    const buttonClasses = computed(() => {
      const baseClasses =
        "px-10 py-4 text-white rounded-full focus:outline-none";
      const typeClasses = {
        primary: "bg-primary-black hover:bg-secondary-100 font-semibold",
        secondary: "bg-primary-green hover:bg-primary-green text-primary-black font-semibold",
      };
      const widthClasses = {
        small: "w-1/12",
        medium: "w-1/6",
        large: "w-full",
        "": "",
      };

      return `${baseClasses} ${typeClasses[props.type]} ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${widthClasses[props.width]}`;
    });

    const handleClick = () => {
      if (!props.disabled) {
        emit("click");
      }
    };

    return { buttonClasses, handleClick };
  },
});
</script>
