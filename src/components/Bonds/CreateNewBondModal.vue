<template>
	<Dialog
		v-model:visible="display" :modal="true" header="Create a Bond" pt:mask:class="backdrop-brightness-30"
		:style="{width: '30vw'}" class="!rounded-2xl">
		<template #header>
			<div class="flex flex-col">
				<span class="text-lg font-semibold">Create New Bond</span>
				<span class="text-sm text-slate-500">Create a bond to connect with your partners and share calendars</span>
			</div>
		</template>

		<div class="flex items-center space-x-4 mx-2">
			<label class="font-semibold mb-2">Name</label>
			<InputText
				name="name" placeholder="e.g., Family Bond" size="small" unstyled
				class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
		</div>

		<template #footer>
			<button class="btn-hover px-4 py-2 rounded-2xl border border-slate-200 hover:bg-primary-100" @click="closeModal">
				<span class="text-sm font-semibold">Cancel</span>
			</button>
			<button class="btn-hover bg-primary-500 px-4 py-2 rounded-2xl border border-slate-200">
				<span class="text-white">Create Bond</span>
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