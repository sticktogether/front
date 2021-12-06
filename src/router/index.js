import { createWebHistory, createRouter } from "vue-router";
import InfoPage from "@/pages/InfoPage.vue";

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   meta: {
    //     title: 'Список дел'
    //   },
    //   component: () => import('@/views/Home.vue')
    // },
    {
        path: '/info',
        name: 'info',
        meta: {
            title: 'Информация'
        },
        component: InfoPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router