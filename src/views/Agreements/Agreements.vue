<template>
	<div class="min-h-screen bg-slate-100 pb-20">
		<div class="px-4 pt-10 pb-4 space-y-6">
			<div class="flex justify-between items-center mb-6">
				<div>
					<h1 class="text-2xl font-bold text-gray-800">Couple Agreements</h1>
					<p class="text-slate-500">
						Create and manage agreements with your partner
					</p>
				</div>
				<Avatar label="JU" shape="circle" size="large" class="!bg-warning-100" />
			</div>
			<WelcomeAgreementStepper />
			<SearchAgreements />
			<AgreementsProgress />
			<MyAgreements />
			<RecommendedCategories />
			<CategoryExplorer />
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";

import SearchAgreements from "@/components/Agreements/SearchAgreements.vue";
import AgreementsProgress from "@/components/Agreements/AgreementsProgress.vue";
import MyAgreements from "@/components/Agreements/MyAgreements.vue";
import RecommendedCategories from "@/components/Agreements/RecommendedCategories.vue";
import CategoryExplorer from "@/components/Agreements/CategoryExplorer.vue";
import WelcomeAgreementStepper from "@/components/Agreements/WelcomeAgreementStepper.vue";




</script>

<style scoped>

</style>