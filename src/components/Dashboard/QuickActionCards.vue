<template>
	<Card class="!rounded-2xl border-none !shadow-none mx-4">
		<template #title>
			<span>Accesos rápidos</span>
		</template>
		<template #content>
			<div class="grid grid-cols-5 gap-4">
				<Card class="!rounded-2xl border-none !shadow-none !bg-[#faf5ff]">
					<template #title>
						<div class="inline-flex space-x-2 !text-base">
							<i class="pi pi-heart text-primary-500 mt-1" />
							<span>Couple Agreements</span>
						</div>
					</template>
					<template #content>
						<span class="text-sm">Set relationships</span>
					</template>
					<template #footer>
						<div class="flex justify-end">
							<i class="pi pi-arrow-right bg-white p-2 rounded-full text-sm" />
						</div>
					</template>
				</Card>
				<Card class="!rounded-2xl border-none !shadow-none !bg-[#faf5ff]">
					<template #title>
						<div class="inline-flex space-x-2 !text-base">
							<i class="pi pi-heart text-primary-500 mt-1" />
							<span>Wishlist</span>
						</div>
					</template>
					<template #content>
						<span class="text-sm">Ideas for your partner</span>
					</template>
					<template #footer>
						<div class="flex justify-end">
							<i class="pi pi-arrow-right bg-white p-2 rounded-full text-sm" />
						</div>
					</template>
				</Card>
				<Card class="!rounded-2xl border-none !shadow-none !bg-green-50">
					<template #title>
						<div class="inline-flex space-x-2 !text-base">
							<i class="pi pi-dollar text-green-400 mt-1" />
							<span>Shared expenses</span>
						</div>
					</template>
					<template #content>
						<span class="text-sm">Manages expenses with your partner</span>
					</template>
					<template #footer>
						<div class="flex justify-end">
							<i class="pi pi-arrow-right bg-white p-2 rounded-full text-sm" />
						</div>
					</template>
				</Card>
				<Card class="!rounded-2xl border-none !shadow-none !bg-blue-50">
					<template #title>
						<div class="inline-flex space-x-2 !text-base">
							<i class="pi pi-folder text-info-400 mt-1" />
							<span>Shared Folder</span>
						</div>
					</template>
					<template #content>
						<span class="text-sm">Couple files and documents</span>
					</template>
					<template #footer>
						<div class="flex justify-end">
							<i class="pi pi-arrow-right bg-white p-2 rounded-full text-sm" />
						</div>
					</template>
				</Card>
				<Card class="!rounded-2xl border-none !shadow-none !bg-orange-50">
					<template #title>
						<div class="inline-flex space-x-2 !text-base">
							<i class="pi pi-comment text-orange-400 mt-1" />
							<span>Saved Memories</span>
						</div>
					</template>
					<template #content>
						<span class="text-sm">Special moments</span>
					</template>
					<template #footer>
						<div class="flex justify-end">
							<i class="pi pi-arrow-right bg-white p-2 rounded-full text-sm" />
						</div>
					</template>
				</Card>
			</div>
		</template>
	</Card>
</template>


<script setup>

</script>

<style scoped>

</style>