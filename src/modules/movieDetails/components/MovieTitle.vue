<script setup lang="ts">

</script>

<template>
  <div>
    <div :class="style.mainHeader">
      Harry Potter i Kamień Filozoficzny
      <span :class="style.movieYear">
        (2001)
      </span>
    </div>
    <div :class="style.movieRuntime">
      2godz. 33min.
    </div>
  </div>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

.mainHeader {
  font-size: 32px;
  font-family: "Righteous", "Poppins";
}

.movieYear {
  color: color.$text-transparent;
}

.movieRuntime {
  font-size: 16px;
}
</style>