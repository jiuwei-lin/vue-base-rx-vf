import Vue from 'vue';
import Router from 'vue-router';

import paths from '@/router/paths';

Vue.use(Router);

function route(path, view, name) {
  return {
    name: name || view,
    path,
    component: resovle => import(`@/views/${view}.vue`).then(resovle)
  };
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map(path => route(path.path, path.view, path.name))
});