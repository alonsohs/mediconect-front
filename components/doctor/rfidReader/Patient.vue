<template>
  <div class="animate__animated animate__zoomIn animate__faster">
    <Box>
      <div class="-mt-4 mb-2">
        <span class="text-gray-300 text-xs">RFID #{{ patient.rfId }}</span>
      </div>
      <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="flex justify-center">
          <img
            :src="patient.profileImage || profilePlaceholder"
            :alt="patient.fullName"
            class="rounded-md  object-cover max-w-sm w-full patient-image"
          >
        </div>
        <div class="lg:col-span-2 transition-height">
          <h3 class="text-xl lg:text-2xl font-medium uppercase mb-2 text-center md:text-left">
            {{ patient.fullName || computedFullName }}</h3>
          <DataList>
            <DataItem title="Edad" :value="getAge(patient.date_of_birth)"/>
            <DataItem title="Género" :value="patient.gender"/>
            <DataItem v-if="patient.phone" title="Teléfono" :value="patient.phone"/>
            <DataItem v-if="patient.address" title="Dirección" :value="patient.address"/>
            <DataItem title="Tipo de sangre" value="O+"/>
            <DataItem v-if="seeMoreInfo" title="Peso" value="64 kg"/>
            <DataItem v-if="seeMoreInfo" title="Altura" value="1.67 m"/>
            <DataItem v-if="seeMoreInfo" title="CURP" :value="patient.curp"/>
            <DataItem v-if="seeMoreInfo" title="NSS" value="123456789123"/>
          </DataList>
          <div>
            <button @click="toggleSeeMoreInfo" class="font-medium text-doc-blue-100 hover:text-doc-blue-200 underline">
              {{ seeMoreInfo ? 'Ver menos' : 'Ver más' }}
            </button>
          </div>
        </div>
      </div>
    </Box>
    <div class="grid  lg:grid-cols-2 gap-x-6">
      <!--    Main Diseases-->
      <Box class=" space-y-5">
        <BoxTitle>Enfermedades Crónicas</BoxTitle>
        <div  v-if="patient.main_disease" >
          <DoctorRfidReaderPatientDisease :color="patient.bandColor" :title="patient.main_disease.name"
                                          :value="patient.main_disease.description"/>
        </div>
        <div v-else>
          <DoctorRfidReaderPatientDisease color="RED" title="Hipertensión Grado 2"
                                          value="Presión sistólica 160-179 mmHg y/o diastólica 100-109 mmHg"/>
          <DoctorRfidReaderPatientDisease color="BLUE" title="Diabetes tipo 2"
                                          value="Los niveles de glucosa en sangre estando en ayunas se sitúan entre 100 y 125 mg/dl y después de comer entre los 140 y los 199 mg/dl"/>
        </div>
      </Box>
      <!--      Emergency contacts-->
      <Box>
        <BoxTitle>Contactos de Emergencia</BoxTitle>
        <h5 class="font-medium">Médicos</h5>
        <DataList>
          <DataItem title="Steven Grant" value="2411234567" extra="Cardiólogo"/>
          <DataItem title="Jeff Gómez" value="2411234907" extra="General"/>
        </DataList>
        <h5 class="font-medium mt-2">Personales</h5>
        <DataList>
          <DataItem title="Judith Sastré" value="2461095845" extra="Madre"/>
        </DataList>
      </Box>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
      <Box class="lg:col-span-2">
        <BoxTitle>Medicamentos</BoxTitle>
        <DataHeader title="Nombre" value="Dosis"/>
        <DataList>
          <DataItem title="Lisinopril" value="Una tableta cada 24 horas en la mañana"/>
          <DataItem title="Metformina"
                    value="1 comprimido de 500 mg o de 850 mg una vez al día, administrado durante o después de las comidas."/>
        </DataList>
      </Box>
      <Box>
        <BoxTitle>Alergias</BoxTitle>
        <DataHeader title="Nombre"/>
        <DataList>
          <DataItem title="Penicilina"/>
          <DataItem title="Anticonvulsivos"/>
          <DataItem title="Sulfamidas"/>
        </DataList>
      </Box>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
      <Box>
        <BoxTitle>Vacunas</BoxTitle>
        <DataHeaderTwoCol title="Nombre" value="Fecha"/>
        <DataList>
          <DataItemTwoCol title="COVID" value="15 Marzo 2022"/>
          <DataItemTwoCol title="Influenza" value="10 Diciembre 2019"/>
          <DataItemTwoCol title="Hepatitis B" value="2 Enero 2014"/>
        </DataList>
      </Box>
      <Box class="lg:col-span-2">
        <BoxTitle>Enfermedades y Cirugías</BoxTitle>
        <DataHeader title="Nombre" value="Fecha" extra="Detalles"/>
        <DataList>
          <DataItem title="Apendicectomía" value="12 Diciembre 2021" extra="Cirugía para extraer el apéndice inflamado sin complicaciones"/>
          <DataItem title="Bronquitis aguda" value="10 Enero 2021" extra="Fuerte inflamación de las vias respiratorias de los púlmones"/>
          <DataItem title="Infección estomacal" value="14 Mayo 2020" extra="Aguda infección por consumo de alimentos en mal estado"/>
        </DataList>
      </Box>
    </div>
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
      profilePlaceholder,
      seeMoreInfo: false
    }
  },
  computed: {
    computedFullName() {
      return `${this.patient.name} ${this.patient.fathers_lastname} ${this.patient.mothers_lastname} `
    }
  },
  methods: {
    toggleSeeMoreInfo() {
      this.seeMoreInfo = !this.seeMoreInfo
    },
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
.patient-image {
  max-height: 388px;
}

.underline {
  text-decoration: underline;
}
</style>
