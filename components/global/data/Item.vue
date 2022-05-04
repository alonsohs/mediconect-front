<template>
  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt class="text-sm font-medium text-gray-500">{{ title }}</dt>
    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      {{ value }}
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String
  }
}
</script>

<style scoped>

</style>
