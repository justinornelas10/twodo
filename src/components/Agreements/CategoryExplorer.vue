<template>
	<div class="mx-4 ">
		<h1 class="text-lg font-medium">Explore Categories</h1>
		<button class="w-full flex items-center justify-start space-x-4 bg-slate-50 hover:bg-primary-100 border border-violet-200 py-2 mt-4 rounded-2xl" @click="visible = true">
			<div class="flex items-center justify-between w-full mx-4">
				<span class="text-sm font-semibold">View All Categories</span>
				<i class="pi pi-angle-right" />
			</div>
		</button>
	</div>
	<Drawer v-model:visible="visible" header="All Categories" position="bottom" style="height: 80%">
		<div class="grid grid-cols-3 mb-10 gap-6">
			<CardAgreementCategory
				title="health"
				description="Exercise, nutrition, medical check-ups" />
			<CardAgreementCategory
				title="household"
				description="Cleaning, cooking, finances" />
			<CardAgreementCategory
				title="intimacy"
				description="Boundaries, communication of desires" />
			<CardAgreementCategory
				title="expectations"
				description="Type of relationship, cohabitation"
				footer="Create Agreement" />
			<CardAgreementCategory
				title="future"
				description="Children, shared finances, goals"
				footer="Create Agreement" />
			<CardAgreementCategory
				title="privacy"
				description="Personal space, social media" />
			<CardAgreementCategory
				title="finances"
				description="Expenses, savings, investments" />
			<CardAgreementCategory
				title="emotional"
				description="Communication in conflicts" />
		</div>
	</Drawer>
</template>


<script setup>
import {ref} from "vue";
import CardAgreementCategory from "@/components/widgets/Cards/CardAgreementCategory.vue";

const visible = ref(false);
</script>

<style scoped>

</style>