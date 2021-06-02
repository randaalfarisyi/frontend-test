import Vue from "vue";
import Router from "vue-router";

import HelloWorld from './components/HelloWorld.vue';
import Tes from './components/tes.vue';

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
      {
        path: "/hello",
        name: "hello",
        //alias: "/",
        component: HelloWorld,
      },
      {
        path: "/image",
        name: "image",
        //alias: "/",
        component: Tes,
      },
     
    ]
  });