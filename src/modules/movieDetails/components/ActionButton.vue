<script setup lang="ts">
import LinkWrapper from '@/modules/shared/linkWrapper/LinkWrapper.vue'

interface Props {
  isExternal: boolean
  path: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <LinkWrapper :isExternal="isExternal" :path="path">
    <button
      :class="isExternal ? style.buttonExternal : style.buttonInternal"
    >
      {{ text }}
    </button>
  </LinkWrapper>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

@mixin button($button-color) {
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px $button-color;
  outline: none;
  font-family: "Poppins";
  color: $button-color;
  background: color.$filler;
  cursor: pointer;

  &:hover {
    background: color.$annotation-dark;
  }
}

.buttonExternal {
  @include button(color.$secondary-light)
}

.buttonInternal {
  @include button(color.$primary-light-2)
}
</style>