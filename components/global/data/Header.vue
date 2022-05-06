<template>
  <div class="py-2 sm:grid sm:grid-cols-3 sm:gap-4 hidden">
    <dt class="text-sm lg:text-base font-medium">{{ title }}</dt>
    <dt class="mt-1 flex text-sm lg:text-base sm:mt-0 font-medium" :class="extra ? '' : 'sm:col-span-2'">
      {{ value }}
    </dt>
    <dt v-if="extra" class="mt-1 flex text-sm font-medium sm:mt-0">
      {{ extra }}
    </dt>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    extra: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>

</style>
