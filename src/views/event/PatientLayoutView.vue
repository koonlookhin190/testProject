<template>
  <div v-if="GStore.patient">
    <div class="row" id="navbar">
      <div class="col-3">
        <router-link to="/">HOME</router-link>
      </div>
      <div class="col-3" id="border">
        <router-link :to="{ name: 'PatientDetailView' }"
          >PERSONAL INFORMATION</router-link
        >
      </div>
      <div class="col-3" id="border">
        <router-link :to="{ name: 'VaccineDetail' }"
          >VACCINATION INFORMATION</router-link
        >
      </div>
      <div class="col-3" id="border">
        <router-link :to="{ name: 'DoctorComment' }"
          >DOCTOR COMMENT</router-link
        >
      </div>
    </div>
    <router-view :patient="GStore.patient" :vaccines="GStore.vaccines" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style scoped>
#navbar {
  background: #161240;
  padding: 10px;
}

#navbar a {
  color: #eff9fe;
}

#border {
  border-left: solid white 1px;
}
</style>
