<template>
  <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-doc-blue-100 rounded-full">
        </span>
    <Box class="max-w-xl">
      <div class="justify-between sm:flex mb-2">
        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Hace {{time}}</time>
        <div class="text-xs text-gray-400 mb-2">RFID #{{rfId}}</div>
      </div>
      <div class="flex gap-5">
        <div>
          <img class="inline-block h-14 w-14 object-cover rounded-full" :src="imageUrl || profilePlaceholder" >
        </div>
        <div class="space-y">
          <h4 class="text-xl font-normal text-gray-700 ">{{name}}</h4>
          <p class="text-sm text-gray-600">{{gender}}, {{age}} años</p>

        </div>
      </div>
    </Box>
  </li>
</template>

<script>
import profilePlaceholder from '@/assets/profile_placeholder.png'

export default {
  name: "Item",
  props: {
    time: String,
    rfId: String,
    name: String,
    gender: String,
    age: String,
    imageUrl: String
  },
  data() {
    return {
      profilePlaceholder
    }
  },
  methods: {
    getAge(date_birth) {
      const now = new Date()
      const date_of_birth = new Date(date_birth)
      let age = now.getFullYear() - date_of_birth.getFullYear()
      const months = now.getMonth() - date_of_birth.getMonth()

      if (
        months < 0 ||
        (months === 0 && now.getDate() < date_of_birth.getDate())
      ) {
        age--
      }
      return age
    }
  }
}
</script>

<style scoped>

</style>
