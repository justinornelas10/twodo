import Agreements from "@/views/Agreements/Agreements.vue";
import CreateExpectations from "@/views/Agreements/CreateExpectations.vue";


export default [
    {
        path: '/agreements',
        name: 'agreements',
        component: Agreements
    },
    {
        path: '/agreements/create/expectations',
        name: 'create-expectations',
        component: CreateExpectations
    }
]