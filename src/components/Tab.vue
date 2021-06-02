<template>
  <div v-if="isSelected">
    <slot></slot><br><br>
  </div>
</template>
<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>

</style>