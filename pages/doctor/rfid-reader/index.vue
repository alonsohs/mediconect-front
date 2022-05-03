<template>
  <div>
    <div class="pb-5 border-b border-gray-200 mb-5">
      <h3 class="text-2xl leading-6 font-medium text-doc-blue-200">Lector RFID</h3>
    </div>
      <GlobalBox>
        <div>
          Doctor ID
          <span>{{ $auth.user.id }}</span>
        </div>
        <div>
          RFID Reader ID
          <span>{{ $auth.user.rfid_reader.id }}</span>
        </div>
        <div>
          Connection status:
          <span>{{ connectionStatus }}</span>
        </div>
        <div>
          Patient:
          <span>{{ patient }}</span>
        </div>
        <div>
          <i class="fa-solid fa-bolt"></i>
        </div>
      </GlobalBox>
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
      connectionStatus: 'Conectando',
      patient: {}
    }
  },
  mounted() {
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
  }
}
</script>

<style scoped>

</style>
