<template>
  <Box class="overflow-hidden">
    <div>
      {{$auth.user}}
    </div>
    <button @click="userLogout">Logout</button>
  </Box>
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
