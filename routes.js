import { createRouter, createWebHistory } from "vue-router";
import JobList from "./src/components/jobsList.vue";
import JobDetail from "./src/components/JobDetail.vue";

const router = createRouter({
  history: createWebHistory('http://localhost:5173/'),
  routes: [
    {
      path: "/",
      name: "JobList",
      component: JobList,
    },
    {
      path: "/jobs/:id",
      name: "JobDetail",
      component: JobDetail,
      props: route => ({ id: Number(route.params.id) })
    },
  ],
});

export default router;