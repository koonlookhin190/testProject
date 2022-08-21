<template>
  <router-link
    class="event-link"
    :to="{ name: 'PatientDetailView', params: { id: patient.id } }"
  >
    <div @click="clearCommment" class="event-card">
      <h3>Name: {{ patient.name }} {{ patient.surname }}</h3>
      <h4>Status: {{ patient.status }}</h4>
      <img :src="patient.image" class="image" />
    </div>
  </router-link>
</template>
<script>
// import GStore from '@/store'
export default {
  name: 'PatientCard',
  props: {
    patient: {
      type: Object,
      required: true
    }
  },
  methods: {
    clearCommment() {
      // console.log(GStore.patient.name)
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.image {
  width: 250px;
  height: 270px;
}
</style>
