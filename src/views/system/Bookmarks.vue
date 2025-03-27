<template>
	<div class="min-h-screen bg-slate-100 pb-20">
		<div class="flex items-center space-x-4 bg-white p-4">
			<i class="pi pi-bookmark text-primary-500" style="font-size: 1.1rem" />
			<span class="text-xl font-semibold">Bookmarks</span>
		</div>
		<Card class="m-6 !rounded-2xl !shadow-none">
			<template #title>
				<div class="flex justify-center">
					<i class="pi pi-bookmark text-primary-500" style="font-size: 3rem" />
				</div>
			</template>
			<template #content>
				<div class="flex flex-col justify-center items-center">
					<span class="font-semibold text-lg ">No bookmarks yet</span>
					<span class="text-gray-500">Save your favorite agreements and events for quick access</span>
				</div>
			</template>
		</Card>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>