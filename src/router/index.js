import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientLayoutView from '../views/event/PatientLayoutView.vue'
import PatientDetailView from '../views/event/PatientDetailView.vue'
import DoctorComment from '../views/event/DoctorComment.vue'
import VaccineDetail from '../views/event/VaccineDetail.vue'
import PatientService from '@/service/PatientService.js'
import NProgress from 'nprogress'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 4
    })
  },
  {
    path: '/',
    name: 'PatientLayout',
    props: true,
    component: PatientLayoutView,
    beforeEnter: (to) => {
      return PatientService.getPatient(to.params.id)
        .then((response) => {
          GStore.patient = response.data
          GStore.patient.doctorRec = GStore.comments.filter(
            (patient) => GStore.patient.id == patient.patient_id
          )
        })
        .catch((error) => {
          console.log(error)
        })
    },
    children: [
      {
        path: 'people/:id',
        name: 'PatientDetailView',
        component: PatientDetailView,
        props: true
      },
      {
        path: 'vaccine/:id',
        name: 'VaccineDetail',
        component: VaccineDetail,
        props: true
      },
      {
        path: 'comment/:id',
        name: 'DoctorComment',
        component: DoctorComment,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
