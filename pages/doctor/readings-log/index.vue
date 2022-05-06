<template>
  <div>
    <div class="pb-5  mb-5">
      <h3 class="text-2xl leading-6 font-medium text-doc-blue-200">Registro de Lecturas</h3>
    </div>
    <div class="pl-3 animate__animated animate__slideInUp animate__faster">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
       <DoctorReadingsLogItem time="5 minutos" rfId="12345678" name="Alonso Hernández Sastré" gender="Masculino" age=""/>
       <DoctorReadingsLogItem time="1 hora" rfId="87654321" name="Omar Valencia Díaz" gender="Masculino" age="45"/>
       <DoctorReadingsLogItem time="3 días" rfId="34567812" name="Valeria Luna Galicia" gender="Femenino" age="33"/>
       <DoctorReadingsLogItem time="5 días" rfId="12341234" name="Ximena Chacón Rojas" gender="Femenino" age="18"/>
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
