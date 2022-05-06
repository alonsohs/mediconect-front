<template>
  <div>
    <div class="pb-5  mb-5">
      <h3 class="text-2xl leading-6 font-medium text-doc-blue-200">Mi Perfil</h3>
    </div>

    <section class="animate__animated animate__slideInUp animate__faster">
      <div class="grid lg:grid-cols-4 gap-6">
        <Box class="flex">
          <img class="block object-cover rounded-lg" :src="$auth.user.profileImage || profilePlaceholder" :alt="$auth.user.fullName">
        </Box>
        <Box class="col-span-3">
            <h3 class="text-xl lg:text-2xl font-medium uppercase mb-2">{{$auth.user.fullName}}</h3>
            <DataList>
              <DataItem title="Cédula Profesional" :value="$auth.user.professionalId"/>
              <DataItem title="Fecha de Nacimiento" :value="$auth.user.date_of_birth"/>
              <DataItem title="Email" :value="$auth.user.user.email"/>
              <DataItem title="Teléfono" :value="$auth.user.phone"/>
            </DataList>
        </Box>
      </div>
    </section>

  </div>
</template>

<script>
import profilePlaceholder from "~/assets/profile_placeholder.png";

export default {
  name: "Profile",
  data() {
    return {
      profilePlaceholder: profilePlaceholder
    }
  },
}
</script>

<style scoped>

</style>
