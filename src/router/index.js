import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/404.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Expert",
    component: () =>
      import("../views/Expert.vue")
  },
  {
    path: "/expert/create",
    name: "CreateExpert",
    component: () =>
      import("../views/create/CreateExpert.vue")
  },
  {
    path: "/expert/:id",
    name: "getExpertById",
    component: () =>
      import("../views/info/getExpert.vue")
  },
  {
    path: "/expert/update/:id",
    name: "updateExpertById",
    component: () =>
      import("../views/update/updateExpert.vue")
  },
  {
    path: "/expertise",
    name: "Expertise",
    component: () =>
      import("../views/Expertise.vue")
  },
  {
    path: "/expertise/create",
    name: "CreateExpertise",
    component: () =>
      import("../views/create/CreateExpertise.vue")
  },
  {
    path: "/expertise/:id",
    name: "getExpertiseById",
    component: () =>
      import("../views/info/getExpertise.vue")
  },
  {
    path: "/expertise/update/:id",
    name: "updateExpertiseById",
    component: () =>
      import("../views/update/updateExpertise.vue")
  },

  {
    path: "/customer",
    name: "Customer",
    component: () =>
      import("../views/Customer.vue")
  },
  {
    path: "/customer/create",
    name: "CreateCustomer",
    component: () =>
      import("../views/create/CreateCustomer.vue")
  },
  {
    path: "/customer/:id",
    name: "getCustomerById",
    component: () =>
      import("../views/info/getCustomer.vue")
  },
  {
    path: "/customer/update/:id",
    name: "updateCustomerById",
    component: () =>
      import("../views/update/updateCustomer.vue")
  },
  { 
    path: '/404', 
    name: '404', 
    component: NotFound, 
  }, { 
    path: '*', 
    redirect: '/404' 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
