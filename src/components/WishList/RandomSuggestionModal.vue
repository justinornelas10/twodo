<template>
	<Dialog
		v-model:visible="display" :modal="true" header="New Category" pt:mask:class="backdrop-brightness-30"
		:style="{width: '28vw'}" class="!rounded-3xl !bg-[#f9f8fc]">
		<template #header>
			<div class="flex flex-col">
				<span class="text-lg font-semibold">Choose a Category</span>
				<span class="text-sm text-slate-500">Select a category to get a random suggestion</span>
			</div>
		</template>
		<div class="flex flex-col space-y-4">
			<div class="rounded-2xl px-4 py-3 border border-slate-200 space-x-2 hover:bg-primary-100">
				<span class="font-semibold">Restaurants</span>
				<span class="text-xs text-gray-400 font-semibold">(4)</span>
			</div>
			<div class="rounded-2xl px-4 py-3 border border-slate-200 space-x-2 hover:bg-primary-100">
				<span class="font-semibold">Viajes</span>
				<span class="text-xs text-gray-400 font-semibold">(3)</span>
			</div>
			<div class="rounded-2xl px-4 py-3 border border-slate-200 space-x-2 hover:bg-primary-100">
				<span class="font-semibold">Bares</span>
				<span class="text-xs text-gray-400 font-semibold">(2)</span>
			</div>
			<div class="rounded-2xl px-4 py-3 border border-slate-200 space-x-2 hover:bg-primary-100">
				<span class="font-semibold">Actividades</span>
				<span class="text-xs text-gray-400 font-semibold">(2)</span>
			</div>
			<div class="rounded-2xl px-4 py-3 border border-slate-200 space-x-2 hover:bg-primary-100">
				<span class="font-semibold">Peliculas/Series</span>
				<span class="text-xs text-gray-400 font-semibold">(2)</span>
			</div>
		</div>

		<template #footer>
			<button class="btn-hover px-4 py-2 rounded-2xl border border-slate-200 hover:bg-primary-100" @click="closeModal">
				<span class="text-sm font-semibold">Cancel</span>
			</button>
		</template>
	</Dialog>
</template>

<script setup>
import {ref} from "vue";

const display = ref(false);
const beforeOpen = () => {
    display.value = true;
}

const closeModal = () => {
    display.value = false;
}

defineExpose({beforeOpen});
</script>


<style scoped>

</style>