import AppLayout from "@/layouts/AppLayout.vue";
import {shallowRef} from "vue";


const appLayout = shallowRef(AppLayout);

export default {
    namespaced: true,
    state: {
        current: appLayout,
    },
    actions: {
        setAppLayout(store) {
            store.state.current = appLayout;
        }
    }
}