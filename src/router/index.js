import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PatientLayoutView from "../views/event/PatientLayoutView.vue";
import PatientDetailView from "../views/event/PatientDetailView.vue";
import DoctorComment from "../views/event/DoctorComment.vue";
import VaccineDetail from "../views/event/VaccineDetail.vue";
import PatientService from "@/service/PatientService.js";
import CommentHistoryService from "@/service/CommentHistoryService.js";
import NProgress from "nprogress";
import GStore from "@/store";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 5,
    }),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "PatientLayout",
    props: true,
    component: PatientLayoutView,
    beforeEnter: (to) => {
      return (
        PatientService.getPatient(to.params.id)
          .then((response) => {
            //Still need to set the data here
            GStore.patient = response.data;
            GStore.patient.doctorRec = GStore.comments.filter(
              (patient) => GStore.patient.id == patient.patient_id
            );
          })
          .catch((error) => {
            console.log(error);
            // if (error.response && error.response.status == 404) {
            //   return {
            //     name: "404Resource",
            //     params: { resource: "patient" },
            //   };
            // } else {
            //   return { name: "NetworkError" };
            // }
          }),
        PatientService.getVaccine(to.params.id) //Return and params.id
          .then((response) => {
            //Still need to set the data here
            GStore.vaccines = response.data;
          })
          .catch((error) => {
            console.log(error);
            // if (error.response && error.response.status == 404) {
            //   return {
            //     name: "404Resource",
            //     params: { resource: "patient" },
            //   };
            // } else {
            //   return { name: "NetworkError" };
            // }
          }),
        CommentHistoryService.getCommentHistory(to.params.id) //Return and params.id
          .then((response) => {
            //Still need to set the data here
            GStore.commentsHistory = response.data;
          })
          .catch((error) => {
            console.log(error);
            // if (error.response && error.response.status == 404) {
            //   return {
            //     name: "404Resource",
            //     params: { resource: "patient" },
            //   };
            // } else {
            //   return { name: "NetworkError" };
            // }
          })
      );
    },
    children: [
      {
        path: "people/:id",
        name: "PatientDetailView",
        component: PatientDetailView,
        props: true,
      },
      {
        path: "vaccine/:id",
        name: "VaccineDetail",
        component: VaccineDetail,
        props: true,
      },
      {
        path: "comment/:id",
        name: "DoctorComment",
        component: DoctorComment,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
