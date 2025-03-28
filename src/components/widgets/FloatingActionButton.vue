<template>
	<div class="fixed bottom-10 right-6 z-[9999]">
		<button class="bg-[#f499b7] hover:bg-[#ff9fb2] px-6 py-5 rounded-full shadow-xl" @click="createEventModal.beforeOpen()">
			<i class="pi pi-plus text-white" />
		</button>
	</div>
	<AddEventModal ref="createEventModal" />
</template>

<script setup>
import {ref} from "vue";
import AddEventModal from "@/components/Calendar/AddEventModal.vue";

const createEventModal = ref(null);
</script>

<style scoped>

</style>