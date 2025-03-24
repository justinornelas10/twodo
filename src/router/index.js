import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/router/system/dashboard.js";
import Wishlist from "@/router/system/wishlist.js";
import Agreements from "@/router/system/agreements.js";
import Calendar from "@/router/system/calendar.js";
import Chat from "@/router/system/chat.js";
import Expenses from "@/router/system/expenses.js";
import Shared_folder from "@/router/system/shared_folder.js";

const routes = [
    ...Dashboard,
    ...Wishlist,
    ...Agreements,
    ...Calendar,
    ...Chat,
    ...Expenses,
    ...Shared_folder,
]

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    })
    return router;
}


