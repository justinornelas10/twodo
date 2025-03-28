<template>
	<Dialog
		v-model:visible="display" :modal="true" header="Schedule a visit" pt:mask:class="backdrop-brightness-30"
		:style="{width: '30vw'}" class="!rounded-2xl">
		<template #header>
			<span class="text-lg font-semibold">Agendar visita a "{{ props.title }}"</span>
		</template>
		<div class="flex flex-col space-y-4">
			<span class="text-sm text-gray-500">Selecciona una fecha para añadir esto a tu calendario: </span>
			<DatePicker inline showWeek />
		</div>
		<template #footer>
			<button class="btn-hover px-4 py-2 rounded-2xl border border-slate-200 hover:bg-primary-100" @click="closeModal">
				<span class="text-sm font-semibold">Cancel</span>
			</button>
			<button class="btn-hover bg-primary-500 px-4 py-2 rounded-2xl border border-slate-200">
				<span class="text-white text-sm font-semibold">Añadir al Calendario</span>
			</button>
		</template>
	</Dialog>
</template>

<script setup>

import {ref} from "vue";

const display = ref(false);

const props = defineProps({
    title: {type: String, default: ''}
})

const beforeOpen = () => {
    display.value = true;
}

const closeModal = () => {
    display.value = false;
}

defineExpose({ beforeOpen });

</script>


<style scoped>

</style>