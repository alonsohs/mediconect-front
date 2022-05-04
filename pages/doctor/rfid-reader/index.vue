<template>
  <div v-if="$auth.user.hasRfidReader">
    <div class="pb-5  mb-5">
      <h3 class="text-2xl leading-6 font-medium text-doc-blue-200">Lector RFID</h3>
    </div>

    <section class="animate__animated animate__slideInUp animate__faster">
      <!--  BEGIN RFID Reader info  -->
      <Box v-if="!loading" class="p-0">
        <div
          class="w-full grid grid-cols-1 overflow-hidden  divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
          <div class="p-6">
            <h4 class="reader__title">Lector</h4>
            <p class="reader__value">{{ rfidReader.name }}</p>
          </div>
          <div class="p-6">
            <h4 class="reader__title">Ubicación</h4>
            <p class="reader__value">{{ rfidReader.locationName }}</p>
          </div>
          <div class="p-6 ">
            <h4 class="reader__title">Estatus</h4>
            <div class="flex items-center gap-4">
              <p class="reader__value">{{ connectionStatus }}</p>
              <div>
                <div class="absolute">
                  <i class="fa-solid fa-circle animate-ping" :class="connectionStatusClass"></i>
                </div>
                <i class="fa-solid fa-circle" :class="connectionStatusClass"></i>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <!--  END RFID Reader info  -->
      <!--  BEGIN Patient info  -->
      <Box v-if="!patient" class="h-96 flex place-content-center">
        <div v-if="connectionStatus === 'Conectando'" class="flex flex-col justify-center">
          <div class="flex justify-center mb-5">
            <i class="fa-solid fa-spinner animate-spin text-3xl text-gray-500"></i>
          </div>
          <p class="text-gray-500 text-lg">Esperando a conectarse con el servidor...</p>
        </div>
        <div v-else-if="connectionStatus === 'Conectado'" class="flex flex-col justify-center">
          <div class="mb-5 h-40 w-56 relative mx-auto -mt-8 mb-12">
            <DoctorRfidReaderLoader class="scale-125"/>
          </div>
          <p class="text-2xl text-center mb-2 text-doc-blue-100">Escuchando nuevas lecturas</p>
          <p class="text-gray-500 text-center">Acerca una pulsera al lector para visualizar la información</p>
        </div>
        <div v-else-if="connectionStatus === 'Desconectado'" class="flex flex-col justify-center items-center">
          <div class="flex justify-center mb-5">
            <i class="fa-solid fa-face-frown text-5xl text-gray-400"></i>
          </div>
          <p class="text-gray-500 text-lg mb-5">No es posible conectarse con el servidor</p>
          <ButtonPrimary>
            Reintentar
          </ButtonPrimary>
        </div>
      </Box>
      <Box v-else>
        Si hay paciente
      </Box>
      <!--  END Patient info  -->
    </section>
  </div>
  <div v-else>
    <div class="text-center pt-44 lg:pt-72">
      <i class="fa-solid fa-heart-circle-plus text-4xl text-gray-400"></i>
      <h3 class="mt-2  font-medium text-gray-900">No hay un lector registrado</h3>
      <p class="mt-1 text-sm text-gray-500">Registra tu lector a tu cuenta para comenzar</p>
      <div class="mt-6">
        <ButtonPrimary>
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"/>
          </svg>
          Agregar lector
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import {io} from "socket.io-client";

const socket = io('ws://localhost:8000')

export default {
  name: "index",
  components: {},

  layout: 'app',
  data() {
    return {
      rfidReader: {},
      connectionStatus: 'Conectando',
      patient: null,
      loading: true
    }
  },
  computed: {
    connectionStatusClass() {
      if (this.connectionStatus === 'Conectando')
        return 'text-yellow-400 '
      else if (this.connectionStatus === 'Conectado')
        return 'text-green-400 '
      else if (this.connectionStatus === 'Desconectado')
        return 'text-red-400'
    }
  },
  mounted() {
    this.getReader()

    const rfidReaderId = this.$auth.user?.rfid_reader?.id

    socket.emit('connected', rfidReaderId)

    socket.on('connected_id', (socketID) => {
      console.log(socketID)
      this.connectionStatus = 'Conectado'
    })

    socket.on('rfid_read', (patient) => {
      console.log('RFID read')
      console.log(patient)
      this.patient = patient
    })


    socket.on('disconnect', () => {
      this.connectionStatus = 'Desconectado'
      console.log('Socket disconnected');
    })
  },
  updated() {
    console.log('Updated')
    const rfidReaderId = this.$auth.user?.rfid_reader?.id
    socket.emit('connected', rfidReaderId)
  },
  methods: {
    getReader() {
      this.$axios.get('/api/v1/profile/my-rfid-reader')
        .then(res => {
          this.rfidReader = res.data
          this.loading = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.reader__title {
  @apply text-sm text-doc-blue-100 mb-2;
}

.reader__value {
  @apply text-2xl;
}
</style>
