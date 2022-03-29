import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '@/pages/HomePage'

const routes = [
    { 
        path: '/',
        component: HomePage
    }
];


const router = new VueRouter({
    routes,
    mode: 'history' // faz com que o VueRouter processe as rotas ex: /about /videos
});

export default router;