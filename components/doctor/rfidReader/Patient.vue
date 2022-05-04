<template>
<div>
  <Box>
    <div class="-mt-4 mb-2">
      <span class="text-gray-300 text-xs">RFID #{{ patient.rfId }}</span>
    </div>
    <div class="grid  sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div class="">
        <img
          :src="patient.profileImage || profilePlaceholder"
          :alt="patient.fullName"
          class="h-80 rounded-md  object-cover"
        >
      </div>
      <div class="lg:col-span-2">
        <h3 class="text-2xl font-medium uppercase">{{ patient.fullName || computedFullName }}</h3>
        <DataList>
          <DataItem title="CURP"  :value="patient.curp"/>
          <DataItem title="Fecha de nacimiento"  :value="patient.date_of_birth"/>
          <DataItem title="Género"  :value="patient.gender"/>
          <DataItem v-if="patient.phone" title="Teléfono"  :value="patient.phone"/>
        </DataList>
      </div>
    </div>
  </Box>
</div>
</template>

<script>
import profilePlaceholder from '@/assets/profile_placeholder.png'

export default {
  name: "Patient",
  props: {
    patient: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      profilePlaceholder
    }
  },
  computed: {
    computedFullName() {
      return `${this.patient.name} ${this.patient.fathers_lastname} ${this.patient.mothers_lastname} `
    }
  }
}
</script>

<style scoped>

</style>
