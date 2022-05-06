<template>
  <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4">
    <dt class="text-sm lg:text-base font-medium text-gray-500 font-medium">{{ title }}</dt>
    <dd v-if="value" class="mt-1 flex text-sm lg:text-base text-gray-900 sm:mt-0" >
      {{ value }}
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>

</style>
