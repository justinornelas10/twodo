<template>
	<div class="min-h-screen bg-slate-100 pb-20 flex items-center justify-center">
		<Card class="!rounded-2xl !shadow-none w-[27rem]">
			<template #title>
				<h1 class="text-2xl font-semibold">No Active Bond</h1>
			</template>
			<template #content>
				<span class="text-sm text-gray-500 mt-2">You need to have an active bond with your partner to manage expenses together.</span>
			</template>
			<template #footer>
				<RouterLink :to="{ name: 'bonds'}" class="bg-primary-500 w-full flex justify-center rounded-2xl py-2 hover:bg-primary-400">
					<span class="text-white text-sm font-semibold">Go to Bonds</span>
				</RouterLink>
			</template>
		</Card>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>