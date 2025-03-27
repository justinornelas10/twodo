<template>
	<Dialog
		v-model:visible="display" :modal="true" header="New Category" pt:mask:class="backdrop-brightness-30"
		:style="{width: '27vw'}" class="!rounded-2xl !bg-[#f9f8fc]">
		<template #header>
			<div class="flex flex-col">
				<span class="text-lg font-semibold">Add New Category</span>
				<span class="text-sm text-slate-500">Create a new category to organize your wishlit items</span>
			</div>
		</template>
		<div class="flex-col items-center justify-end space-y-3 w-full">
			<div class="flex items-center justify-end space-x-4 mx-2">
				<label class="font-semibold mb-2">Name</label>
				<InputText
					name="name" placeholder="e.g., Restaurants" size="small" unstyled
					class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex items-center justify-end space-x-4 mx-2">
				<label class="font-semibold mb-2">Icon</label>
				<InputText
					:value="iconValue" name="icon" size="small" unstyled
					class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
		</div>
            
		<template #footer>
			<button class="btn-hover px-4 py-2 rounded-2xl border border-slate-200 hover:bg-primary-100" @click="closeModal">
				<span class="text-sm font-semibold">Cancel</span>
			</button>
			<button class="btn-hover bg-primary-500 px-4 py-2 rounded-2xl border border-slate-200">
				<span class="text-white text-sm font-semibold">Add Category</span>
			</button>
		</template>
	</Dialog>
</template>

<script setup>

import {ref} from "vue";

const display = ref(false);
const iconValue = ref('folder')
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