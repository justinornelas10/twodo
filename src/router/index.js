import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/router/system/dashboard.js";


const routes = [
    ...Dashboard,
]

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    })
    return router;
}


