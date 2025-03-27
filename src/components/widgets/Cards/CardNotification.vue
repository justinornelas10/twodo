<template>
	<Card
		class="!rounded-2xl !shadow-none m-4 border-l-6 border-l-primary-500"
		:class="{'border-l-slate-300': props.read}">
		<template #title>
			<div class="flex justify-between">
				<div class="flex items-center space-x-2">
					<span v-if="!props.read" class="text-primary-500 text-3xl">•</span>
					<span>{{ props.title }}</span>
				</div>
				<span class="text-xs text-gray-500 font-normal">{{ props.date }}</span>
			</div>
		</template>
		<template #content>
			<span class="text-gray-500">{{ props.content }}</span>
		</template>
		<template #footer>
			<div class="flex justify-end space-x-3">
				<button v-if="!props.read" class="flex items-center space-x-2 bg-slate-50 px-3 py-2 border border-slate-200 rounded-2xl hover:bg-primary-100">
					<i class="pi pi-check" />
					<span class="text-sm font-semibold">Mark all as read</span>
				</button>
				<button class="flex items-center space-x-2 bg-slate-50 px-3 py-2 border border-slate-200 rounded-2xl hover:bg-primary-100">
					<i class="pi pi-times" />
					<span class="text-sm font-semibold">Dismiss</span>
				</button>
			</div>
		</template>
	</Card>
</template>

<script setup>
const props = defineProps({
    title: {type: String, default: ''},
    date: {type:String, default: ''},
    content: {type: String, default: ''},
    read: {type: Boolean, default: false}
})
</script>

<style scoped>

</style>