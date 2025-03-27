<template>
	<Card class="!rounded-2xl !shadow-none">
		<template #title>
			<span class="text-lg">Agreements progress</span>
		</template>
		<template #content>
			<ProgressBar
				:value="75" class="!bg-[#f490b1]"
				:pt="{
					value: { class: '!bg-primary-500'}
				}" />
			<span class="text-sm text-gray-500">75% of agreements completed</span>
		</template>
		<template #footer>
			<RouterLink :to="{ name: 'create-expectations'}" class="w-full flex items-center justify-center space-x-4 bg-slate-50 hover:bg-primary-100 text-violet-600 hover:text-black border border-violet-200 py-2 rounded-2xl">
				<i class="pi pi-plus" style="font-size: 0.8rem" />
				<span class="text-sm font-semibold">Complete Next Agreement</span>
			</RouterLink>
		</template>
	</Card>
</template>

<script setup>

</script>


<style scoped>

</style>