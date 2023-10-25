<script setup lang="ts">

</script>

<template>
  <div :class="style.cast">
    <div>
      <div :class="style.memberHeader">
        Reżyseria:
      </div>
      Ziomek
    </div>
    <div>
      <div :class="style.memberHeader">
        Scenariusz:
      </div>
      Ziomal
    </div>
  </div>
</template>

<style module="style" lang="scss">
.cast {
  display: flex;
  gap: 40px;
}

.memberHeader {
  font-weight: bold;
}
</style>