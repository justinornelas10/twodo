<template>
	<div class="min-h-screen bg-slate-100 pb-20">
		<div class="flex items-center justify-between bg-white px-6 py-4">
			<div class="space-x-3">
				<i class="pi pi-bell text-primary-500" style="font-size: 1.1rem" />
				<span class="text-xl font-semibold">Notifications</span>
				<Badge value="3" class="!bg-primary-500" />
			</div>
			<div class="flex space-x-3">
				<button class="flex items-center space-x-2 bg-slate-50 px-3 py-2 border border-slate-200 rounded-2xl hover:bg-primary-100">
					<i class="pi pi-check" />
					<span class="text-sm font-semibold">Mark all as read</span>
				</button>
				<button class="flex items-center space-x-2 bg-slate-50 px-3 py-2 border border-slate-200 rounded-2xl hover:bg-primary-100">
					<i class="pi pi-trash" />
					<span class="text-sm font-semibold">Clear all</span>
				</button>
			</div>
		</div>
		<div class="flex flex-col space-y-6">
			<CardNotification
				title="New agreement request"
				date="15 jul 2023"
				content="John sent you a new agreement request for 'Date night'"
				:read="false" />
			<CardNotification
				title="Event reminder"
				date="14 jul 2023"
				content="Don't forget your dinner reservation tomorrow at 8pm"
				:read="true" />
			<CardNotification
				title="Calendar update"
				date="13 jul 2023"
				content="Kate updated the weekend plans"
				:read="false" />
		</div>
		<Paginator
			v-model:first="first" :rows="3" :total-records="5" template="PrevPageLink PageLinks NextPageLink" />
	</div>
</template>

<script setup>

import CardNotification from "@/components/widgets/Cards/CardNotification.vue";
import {ref} from "vue";

const first = ref(0);
</script>

<style scoped>

</style>