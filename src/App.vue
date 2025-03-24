<template>
	<div>
		<component :is="layout" />
	</div>
</template>

<script setup>
import {computed, watch} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";

const store = useStore();
const route = useRoute();

const layout = computed(() => store.state.layout.current);
const currentRoute = computed(() => route.name);

watch(() => route.name, () => {
    if (currentRoute.value === 'login' || currentRoute.value === 'register' || currentRoute.value === 'forgotten-password')
    {
        store.dispatch('layout/setAuthLayout')
    } else {
        store.dispatch('layout/setAppLayout');
    }
})


</script>


<style scoped>

</style>
