<template>
  <div>
    <div class="pb-5  mb-5">
      <h3 class="text-2xl leading-6 font-medium text-doc-blue-200">Registro de Lecturas</h3>
    </div>
    <div class="pl-3 animate__animated animate__slideInUp animate__faster">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
       <DoctorReadingsLogItem time="5 minutos" rfId="12345678" name="Alonso Hernández Sastré" gender="Masculino" age="" imageUrl="https://res.cloudinary.com/dpbgumybq/image/upload/v1652322787/4_1_hxd67q.webp"/>
       <DoctorReadingsLogItem time="1 hora" rfId="87654321" name="Omar Valencia Díaz" gender="Masculino" age="45" imageUrl="https://res.cloudinary.com/dpbgumybq/image/upload/v1652321292/pexels-photo-2379004_qg0dme.jpg"/>
       <DoctorReadingsLogItem time="3 días" rfId="34567812" name="Valeria Luna Galicia" gender="Femenino" age="33" imageUrl="https://res.cloudinary.com/dpbgumybq/image/upload/v1652320580/istockphoto-1300972573-612x612_rxllf3.jpg"/>
       <DoctorReadingsLogItem time="5 días" rfId="12341234" name="Ximena Chacón Rojas" gender="Femenino" age="18" imageUrl="https://res.cloudinary.com/dpbgumybq/image/upload/v1652325062/images_dkszrj.jpg"/>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'app'
}
</script>

<style scoped>

</style>
