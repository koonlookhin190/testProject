<template>
  <div v-if="GStore.patient">
    <div id="nav">
      <router-link :to="{ name: 'PatientDetailView' }">
        Patient Details
      </router-link>
      |
      <router-link :to="{ name: 'VaccineDetail' }">
        Vaccine Details
      </router-link>
      |
      <router-link :to="{ name: 'DoctorComment' }">
        Doctor Comment
      </router-link>
    </div>
    <router-view :patient="GStore.patient" :vaccines="GStore.vaccines" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
<style scoped>
#nav a {
  flex: 1;
  color: #1a7a2f;
  text-decoration: underline;
}
</style>
