<template>
	<div class="bg-white p-6 rounded-xl shadow-md glass mb-6">
		<div class="flex justify-between items-center mb-6">
			<div>
				<h1 class="text-2xl font-bold">Your Bonds</h1>
				<p class="text-slate-500">Manage your connections with partners</p>
			</div>
			<div class="flex items-center space-x-3">
				<button class="btn-hover flex items-center space-x-3 bg-slate-50 hover:bg-primary-100 px-4 py-2 rounded-2xl border border-slate-200" @click="joinModal.beforeOpen()">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
					</svg>
					<span class="text-sm font-semibold">Join Bond</span>
				</button>
				<button class="btn-hover flex items-center space-x-3 bg-primary-500 text-white px-4 py-2 rounded-2xl" @click="modal.beforeOpen()">
					<i class="pi pi-plus" />
					<span class="text-sm font-semibold">Create Bond</span>
				</button>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center mb-6 py-10 text-center">
			<div class="p-4 bg-blue-50 rounded-full flex justify-center w-20 h-20 mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-blue-500">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
				</svg>
			</div>
			<p class="text-slate-700 text-lg font-medium mb-3">No Bonds Created Yet</p>
			<p class="text-slate-500 mb-6 max-w-md mx-auto">
				Bonds allow you to connect and share calendars with your partners
			</p>
			<div class="flex items-center space-x-3">
				<button class="btn-hover flex items-center space-x-3 bg-slate-50 hover:bg-primary-100 px-4 py-2 rounded-2xl border border-slate-200" @click="joinModal.beforeOpen()">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
					</svg>
					<span class="text-sm font-semibold">Join with Code</span>
				</button>
				<button class="btn-hover flex items-center space-x-3 bg-primary-500 text-white px-4 py-2 rounded-2xl" @click="modal.beforeOpen()">
					<i class="pi pi-plus" />
					<span class="text-sm font-semibold">Create Your First Bond</span>
				</button>
			</div>
		</div>
	</div>
	<CreateNewBondModal ref="modal" />
	<JoinWithCodeModal ref="joinModal" />
</template>

<script setup>

import JoinWithCodeModal from "@/components/Bonds/JoinWithCodeModal.vue";
import {ref} from "vue";
import CreateNewBondModal from "@/components/Bonds/CreateNewBondModal.vue";

const joinModal = ref(null);
const modal = ref(null);
</script>

<style scoped>

</style>