<template>
	<div class="min-h-screen bg-slate-50 pb-20 space-y-4">
		<div class="px-44 pt-18 pb-4">
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div>
						<h1 class="text-2xl font-bold">Calendario</h1>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<Button
						label="Nuevo evento" icon="pi pi-plus" size="small"
						class="btn-hover !bg-primary-500 !px-5 text-white !border-none !rounded-2xl"
						@click="createModal.beforeOpen()" />
				</div>
			</div>
		</div>
	</div>
	<AddEventModal ref="createModal" />
</template>


<script setup>
import {ref} from "vue";
import AddEventModal from "@/components/Calendar/AddEventModal.vue";

const createModal = ref(null);

</script>

<style scoped>

</style>