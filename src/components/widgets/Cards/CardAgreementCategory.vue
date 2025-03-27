<template>
	<Card class="!rounded-2xl !shadow-none border border-slate-300 hover:!shadow-sm">
		<template #title>
			<svg
				xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
				class="h-10 w-10 text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
			</svg>
		</template>
		<template #content>
			<h1 class="font-medium">{{ props.title }}</h1>
			<span class="text-sm text-gray-500">{{ props.description }}</span>
		</template>
		<template #footer>
			<div class="text-sm flex items-center text-violet-600">
				<span class="font-semibold">{{ props.footer }}</span>
				<i class="pi pi-angle-right" />
			</div>
		</template>
	</Card>
</template>

<script setup>

const props = defineProps({
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    footer: {type: String, default: 'View Agreements'}
})

</script>


<style scoped>

</style>