<template>
	<div class="mx-4">
		<div class="flex justify-between">
			<h1 class="text-lg font-semibold">My Agreements</h1>
			<button class="flex items-center space-x-2 text-violet-700 hover:bg-primary-200 hover:text-black rounded-2xl px-4 py-2">
				<span class="text-sm font-semibold">View All</span>
				<i class="pi pi-arrow-right" style="font-size: 0.8rem" />
			</button>
		</div>
		<div class="grid grid-cols-2 gap-4 mt-2">
			<Card class="!rounded-2xl !shadow-none p-5 card-wishlist">
				<template #header>
					<div class="flex justify-between items-center">
						<span class="font-semibold">Personal Space Boundaries</span>
						<button class="hover:bg-primary-100 text-yellow-300 hover:text-black px-2 py-1 rounded-full">
							<i class="pi pi-star " />
						</button>
					</div>
				</template>

				<template #content>
					<span class="text-sm text-gray-500 m-0">Respecting each other's need for privacy and personal time</span>
				</template>
				<template #footer>
					<div class="flex items-center space-x-1 text-xs text-gray-400">
						<i class="pi pi-clock" />
						<span>25/03/2025</span>
					</div>
				</template>
			</Card>
			<Card class="!rounded-2xl !shadow-none p-5 card-wishlist">
				<template #header>
					<div class="flex justify-between items-center">
						<span class="font-semibold">Cleaning Schedule</span>
						<button class="hover:bg-primary-100 text-yellow-300 hover:text-black px-2 py-1 rounded-full">
							<i class="pi pi-star " />
						</button>
					</div>
				</template>
				<template #content>
					<span class="text-sm text-gray-500 m-0">Division of household chores and cleaning responsibilities</span>
				</template>
				<template #footer>
					<div class="flex items-center space-x-1 text-xs text-gray-400">
						<i class="pi pi-clock" />
						<span>20/03/2025</span>
					</div>
				</template>
			</Card>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>