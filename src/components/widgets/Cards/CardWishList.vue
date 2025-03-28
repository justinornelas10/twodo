<template>
	<Card class=" !rounded-2xl p-4 !shadow-none border border-slate-300">
		<template #header>
			<div class="flex justify-between">
				<span class="font-semibold">{{ props.header }}</span>
				<div class="flex">
					<button class="text-primary-500 hover:bg-primary-100 hover:text-primary-800 rounded-full px-2 py-1 items-center">
						<i class="pi pi-heart" />
					</button>
					<button class="text-black hover:bg-primary-100 hover:text-primary-800 rounded-full px-2 py-1 items-center">
						<i class="pi pi-pencil" />
					</button>
					<button class="text-danger-500 hover:bg-danger-100 hover:text-danger-500 rounded-full px-2 py-1 items-center">
						<i class="pi pi-trash" />
					</button>
				</div>
			</div>
		</template>
		<template #content>
			<div class="space-y-2">
				<p class="text-sm text-gray-600">
					{{ props.description }}
				</p>
				<div v-if="props.location !== ''" class="flex space-x-2 text-xs text-gray-600 items-center">
					<i class="pi pi-map-marker" style="font-size: 0.8rem" />
					<p>{{ props.location }}</p>
				</div>
				<div class="inline-flex space-x-2">
					<label class="text-xs text-red-700 font-semibold bg-danger-100 px-2 py-1 rounded-lg">Cita</label>
					<label class="text-xs text-red-700 font-semibold bg-danger-100 px-2 py-1 rounded-lg">High priority</label>
					<label class="text-xs text-warning-600 font-semibold bg-warning-100 px-2 py-1 rounded-lg flex items-center space-x-1">
						<i class="pi pi-star-fill" style="font-size: 0.7rem" />
						<span>4.5</span>
					</label>
					<label class="text-sm font-semibold">$$</label>
				</div>
				<div v-if="props.cuisine !== ''">
					<span class="text-xs text-gray-800">Cuisine: {{ props.cuisine }}</span>
				</div>
			</div>
			<div class="hidden lg:block h-px w-full lg:bg-gray-900/10 mt-4" aria-hidden="true" />
		</template>
		<template #footer>
			<div class="flex justify-start bg-slate-100 hover:bg-primary-100 px-3 py-1 rounded-xl" @click="scheduleModal.beforeOpen()">
				<button class="w-full flex justify-between mx-1 items-center">
					<span class="flex items-center space-x-2">
						<i class="pi pi-calendar" />
						<span>Agendar visita</span>
					</span>
					<i class="pi pi-arrow-right" style="font-size: 0.8rem" />
				</button>
			</div>
		</template>
	</Card>
	<ScheduleVisitModal ref="scheduleModal" :title="props.header" />
</template>

<script setup>
import ScheduleVisitModal from "@/components/WishList/ScheduleVisitModal.vue";
import {ref} from "vue";

const props = defineProps({
    header: {type: String, default: ''},
    description: {type: String, default: ''},
    location: { type: String, default: ''},
    cuisine: {type: String, default: ''}
})

const scheduleModal = ref(null);

</script>

<style scoped>

</style>