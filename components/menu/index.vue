<template>
  <div class="pt-2">
    <nav v-if="$auth.user.user.role === 'doctor'" class="mt-5 flex-1 px-2 space-y-1">
      <MenuItem name="Mi perfil" alt="Mi perfil" image="user-md.svg" to="/" />
      <MenuItem name="Lector RFID" alt="Lector RFID" image="heartbeat.svg" to="/doctor/rfid-reader"/>
      <MenuItem name="Registro lecturas" alt="Lector RFID" image="log.png" to="/doctor/readings-log"/>
    </nav>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
