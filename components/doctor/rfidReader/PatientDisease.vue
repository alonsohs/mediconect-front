<template>
  <div class="flex">
    <div class="w-4 rounded-bl-lg rounded-tl-lg" :style="{backgroundColor: getColorClass(color)}" ></div>
    <div
      class="py-4 sm:py-5 px-4 sm:px-5  sm:grid sm:grid-cols-3 sm:gap-4 border flex-1 rounded-br-lg rounded-tr-lg"
    >
      <dt class="text-sm lg:text-base font-medium text-gray-500">{{ title }}</dt>
      <dd class="mt-1 flex text-sm lg:text-base text-gray-900 sm:mt-0 sm:col-span-2">
        {{ value }}
      </dd>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    getColorClass(color) {
      const colors = {
        BLUE: '#2786e5',
        RED: '#fc3131',
        PINK: '#f83cff',
        WHITE: '#dcdcdc',
      }

      if (color in colors) {
        return colors[color]
      }

      return '#b4b4b4'
    }
  }
}
</script>

<style scoped>

</style>
