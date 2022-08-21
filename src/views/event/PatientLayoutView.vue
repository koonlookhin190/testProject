<template>
  <div v-if="GStore.patient">
    <div class="row" id="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row" id="nav">
          <div class="col-3" id="border">
            <router-link to="/">HOME</router-link>
          </div>
          <div class="col-3">
            <router-link :to="{ name: 'PatientDetailView' }"
              >PERSONAL INFORMATION</router-link
            >
          </div>
          <div class="col-3" id="border">
            <router-link :to="{ name: 'VaccineDetail' }"
              >VACCINATION INFORMATION</router-link
            >
          </div>
          <div class="col-3" id="borderR">
            <router-link :to="{ name: 'DoctorComment' }"
              >DOCTOR COMMENT</router-link
            >
          </div>
        </div>
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
#row {
  background: #161240;
}

#nav {
  padding: 10px;
}

#border {
  border-right: solid white 1px;
  border-left: solid white 1px;
}

#borderR {
  border-right: solid white 1px;
}

#nav a {
  color: #eff9fe;
}
</style>
