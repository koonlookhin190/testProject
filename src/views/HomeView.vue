<template>
  <div class="row" id="home">
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'home',
          query: { page: page - 1 }
        }"
        rel="prev"
        v-if="page != 1"
      >
        ←
      </router-link>
    </div>
    <div class="col-6">
      <table>
        <tr>
          <th></th>
          <th>NAME</th>
          <th>VACCINATION STATUS</th>
        </tr>
        <tr
          @click="details(patient.id)"
          v-for="patient in patients"
          :key="patient.id"
          :patient="patient"
          class="clicking"
        >
          <td><img :src="patient.image" class="image" /></td>
          <td>{{ patient.name }} {{ patient.surname }}</td>
          <td>{{ patient.status }}</td>
        </tr>
      </table>
    </div>
    <div class="col-3" id="pagination">
      <router-link
        :to="{
          name: 'home',
          query: { page: page + 1 }
        }"
        rel="next"
        v-if="hasNextPage"
      >
        →</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientService from '../service/PatientService.js'
export default {
  name: 'PatientView',
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    details(id) {
      this.$router.push({
        name: 'PatientDetailView',
        params: { id: id }
      })
    }
  },
  data() {
    return {
      patients: null,
      totalPatients: 0
    }
  },
  /* eslint-disable-next-line no-unused-vars */
  beforeRouteEnter(routeTo, routeFrom, next) {
    PatientService.getPatients(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalPatients = response.headers['x-total-count']
        })
      })

      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PatientService.getPatients(
      parseInt(routeTo.query.page) || 1,
      parseInt(routeTo.query.perPage) || 4
    )
      .then((response) => {
        this.patients = response.data
        this.totalPatients = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      //First, calculate total pages
      let totalPages = Math.ceil(this.totalPatients / this.perPage)

      //Then check to see if the current page is less than the total pages
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
#pagination {
  margin: auto;
  font-size: 70px;
}

#pagination a {
  text-decoration: none;
  color: #2c3e50;
}

.image {
  width: 90px;
  height: 120px;
  border-radius: 3px;
}

.clicking:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

table {
  margin: auto;
  margin-top: 50px;
}

th {
  background: #161240;
  color: #eff9fe;
  font-weight: 100;
  text-align: center;
}

table,
th,
td {
  padding: 10px;
}

tr {
  border-top: 1px solid #161240;
  background: #eff9fe;
}
</style>
