<template>
	<div class="min-h-screen bg-slate-100">
		<div class="mx-4 ">
			<div class="flex space-x-4 pt-8">
				<RouterLink :to="{ name: 'agreements'}">
					<i class="pi pi-angle-left bg-white p-3 rounded-full" />
				</RouterLink>
				<div class="flex flex-col">
					<h1 class="text-2xl font-bold">Relationship Expectations</h1>
					<h2 class=" text-gray-500">Create a new agreement</h2>
				</div>
			</div>
			<Stepper value="1" class="basis-[50rem]">
				<StepList>
					<Step value="1">Assessment</Step>
					<Step value="2">Compare</Step>
					<Step value="3">Formalize</Step>
				</StepList>
				<StepPanels>
					<StepPanel v-slot="{activateCallback}" value="1">
						<div class="p-6">
							<StepAssessment />
							<div class="flex pt-6 justify-end">
								<Button
									class="!bg-primary-500 !border-primary-500 !rounded-3xl hover:!bg-primary-400" size="small"
									label="Continue" @click="activateCallback('2')" />
							</div>
						</div>
					</StepPanel>
					<StepPanel v-slot="{activateCallback}" value="2">
						<div class="p-6">
							<StepCompare />
							<div class="flex pt-6 justify-between">
								<Button
									class="!bg-slate-100 !border-slate-200 !rounded-3xl !px-4 !text-black hover:!bg-primary-100" size="small"
									label="Back" @click="activateCallback('1')" />
								<Button
									class="!bg-primary-500 !border-primary-500 !rounded-3xl hover:!bg-primary-400" size="small"
									label="Continue to Agreement" @click="activateCallback('3')" />
							</div>
						</div>
					</StepPanel>
					<StepPanel v-slot="{activateCallback}" value="3">
						<div class="p-6">
							<StepFormalize />
							<div class="flex pt-6 justify-between">
								<Button
									class="!bg-slate-100 !border-slate-200 !rounded-3xl !px-4 !text-black hover:!bg-primary-100" size="small"
									label="Back" @click="activateCallback('2')" />
								<Button
									class="!bg-primary-500 !border-primary-500 !rounded-3xl hover:!bg-primary-400" size="small" icon="pi pi-save"
									label="Save Agreement" @click="activateCallback('3')" />
							</div>
						</div>
					</StepPanel>
				</StepPanels>
			</Stepper>
		</div>
	</div>
</template>

<script setup>
import StepAssessment from "@/components/Agreements/CreateAgreement/StepAssessment.vue";
import StepCompare from "@/components/Agreements/CreateAgreement/StepCompare.vue";
import StepFormalize from "@/components/Agreements/CreateAgreement/StepFormalize.vue";
</script>

<style scoped>

</style>