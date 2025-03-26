import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import {shallowRef} from "vue";

const appLayout = shallowRef(AppLayout);
const authLayout = shallowRef(AuthLayout);

export default {
    namespaced: true,
    state: {
        current: appLayout,
    },
    actions: {
        setAuthLayout(store) {
            store.state.current = authLayout;
        },
        setAppLayout(store) {
            store.state.current = appLayout;
        }
    }
}