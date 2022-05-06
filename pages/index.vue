<template>
  <DoctorProfile v-if="$auth.user.user.role === 'doctor'">

  </DoctorProfile>
  <PatientProfile v-else-if="$auth.user.user.role === 'patient'"></PatientProfile>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  methods: {
    userLogout() {
      this.$auth.logout()
    },
  }
}
</script>
