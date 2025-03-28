<template>
	<Dialog
		v-model:visible="display" :modal="true" header="New Event" pt:mask:class="backdrop-brightness-30"
		:style="{width: '35vw'}" class="!rounded-2xl !bg-slate-50">
		<template #header>
			<div class="flex flex-col">
				<span class="text-lg font-semibold">Añadir Nuevo Evento</span>
			</div>
		</template>
		<div class="grid grid-cols-2 space-y-3 w-full gap-5">
			<div class="flex flex-col  col-span-2">
				<label class="font-semibold mb-2">Título</label>
				<InputText
					name="title" placeholder="Añadir título" size="small" unstyled
					class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col col-span-2">
				<label class="font-semibold mb-2">Descripción (opcional)</label>
				<TextArea
					name="description" placeholder="Añadir detalles" :rows="3" unstyled
					class="!rounded-xl !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col col-span-2">
				<label class="font-semibold mb-2 ">Ubicación (opcional)</label>
				<InputText
					name="description" placeholder="Añadir ubicación" size="small" unstyled
					class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col">
				<label class="font-semibold mb-2">Fecha de inicio</label>
				<DatePicker
					id="date_start" name="date_start" size="small" showIcon fluid iconDisplay="input"
					class="!h-[2.5rem] items-center rounded-2xl !bg-[#fafcff] border !border-slate-200 text-slate-700 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col">
				<label class="font-semibold mb-2">Fecha de fin</label>
				<DatePicker
					id="date_finish" name="date_finish" size="small" showIcon fluid iconDisplay="input" placeholder="Elegir fecha de fin"
					class="!h-[2.5rem] items-center  rounded-2xl !bg-[#fafcff] border !border-slate-200 text-slate-700 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col">
				<label class="font-semibold mb-2">
					<label class="font-semibold mb-2 inline-flex items-center space-x-1">
						<i class="pi pi-clock" />
						<span>Hora de inicio</span>
					</label>
				</label>
				<DatePicker
					name="time_start" size="small" showIcon fluid iconDisplay="input" timeOnly
					class="!h-[2.5rem] items-center  rounded-2xl !bg-[#fafcff] border !border-slate-200 text-slate-700 focus:!outline-primary-500">
					<template #inputicon="slotProps">
						<i class="pi pi-clock" @click="slotProps.clickCallback" />
					</template>
				</DatePicker>
			</div>
			<div class="flex flex-col">
				<label class="font-semibold mb-2">
					<label class="font-semibold mb-2 inline-flex items-center space-x-1">
						<i class="pi pi-clock" />
						<span>Hora de de término</span>
					</label>
				</label>
				<DatePicker
					name="time_finish" size="small" showIcon fluid iconDisplay="input" timeOnly
					class="!h-[2.5rem] items-center  rounded-2xl !bg-[#fafcff] border !border-slate-200 text-slate-700 focus:!outline-primary-500">
					<template #inputicon="slotProps">
						<i class="pi pi-clock" @click="slotProps.clickCallback" />
					</template>
				</DatePicker>
			</div>
			<div class="flex flex-col col-span-2">
				<label class="font-semibold mb-2">Categoría</label>
				<Select
					v-model="selectedCategory" :options="categories" optionLabel="name" name="category" placeholder="Categoría"
					class="!h-[2.5rem] items-center !rounded-2xl !bg-[#fafcff] border !border-slate-200 text-slate-700 focus:!outline-primary-500" />
			</div>

			<div class="!rounded-2xl !shadow-none !bg-slate-50 border border-slate-200 p-3">
				<div class="flex items-center space-x-2 ">
					<div class="flex flex-col">
						<h1 class="text-sm font-semibold">Todo el día</h1>
						<span class="text-xs">El evento dura todo el día</span>
					</div>
					<ToggleSwitch />
				</div>
			</div>
			<div class="!rounded-2xl !shadow-none !bg-slate-50 border border-slate-200 p-3">
				<div class="flex items-center space-x-4 ">
					<div class="flex flex-col">
						<h1 class="text-sm font-semibold">Privado</h1>
						<span class="text-xs">Solo visible para ti</span>
					</div>
					<ToggleSwitch />
				</div>
			</div>
		</div>
		<template #footer>
			<button class="btn-hover px-4 py-2 rounded-2xl border border-slate-200 hover:bg-primary-100" @click="closeModal">
				<span class="text-sm font-semibold">Cancel</span>
			</button>
			<button class="btn-hover bg-primary-500 px-4 py-2 rounded-2xl border border-slate-200">
				<span class="text-white text-sm font-semibold">Crear Evento</span>
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