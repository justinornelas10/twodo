import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/router/dashboard.js";
import Wishlist from "@/router/wishlist.js";
import Agreements from "@/router/agreements.js";
import Calendar from "@/router/calendar.js";
import Chat from "@/router/chat.js";
import Expenses from "@/router/expenses.js";
import Shared_folder from "@/router/shared_folder.js";
import Profile from "@/router/system/profile.js";
import Bonds from "@/router/system/bonds.js";
import Bookmarks from "@/router/system/bookmarks.js";
import Notifications from "@/router/system/notifications.js";

const routes = [
    ...Dashboard,
    ...Wishlist,
    ...Agreements,
    ...Calendar,
    ...Chat,
    ...Expenses,
    ...Shared_folder,
    ...Profile,
    ...Bonds,
    ...Bookmarks,
    ...Notifications
]

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    })
    return router;
}


