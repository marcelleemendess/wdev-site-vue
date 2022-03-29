import  { createRouter, createWebHistory} from 'vue-router';



import HomePage from '@/pages/HomePage'
import VideosPage from '@/pages/VideosPage'
import SobrePage from '@/pages/SobrePage'
import ContatoPage from '@/pages/ContatoPage'

const routes = [
    { 
        path: '/',
        component: HomePage
    },
    { 
        path: '/videos',
        component: VideosPage
    },
    { 
        path: '/sobre',
        component: SobrePage
    },
    { 
        path: '/contato',
        component: ContatoPage
    }

];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;