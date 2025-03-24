<template>
	<Card class="!rounded-2xl border-none !shadow-none mx-4">
		<template #title>
			<div class="flex justify-between items-center">
				<span class="font-bold">Próximos eventos:</span>
				<div class="inline-flex space-x-1">
					<Button icon="pi pi-list" label="Next" size="small" class="!rounded-2xl !text-black !bg-primary-100 !border-none" />
					<Button label="Week" size="small" class="!rounded-2xl !text-black !bg-white !border-none hover:!bg-slate-100">
						<template #icon>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
							</svg>
						</template>
					</Button>
					<Button icon="pi pi-calendar" label="Month" size="small" class="!rounded-2xl !text-black !bg-white !border-none hover:!bg-slate-100" />
					<Button icon="pi pi-bars" label="All" size="small" class="!rounded-2xl !text-black !bg-white !border-none hover:!bg-slate-100" />
				</div>
			</div>
		</template>
		<template #content>
			<div class="space-y-4">
				<div class="space-y-2">
					<h1>March 2025</h1>
					<div class="!rounded-2xl outline outline-slate-200 m-1 px-4 py-2 hover:bg-slate-50">
						<div class="flex justify-between">
							<h1 class="text-sm font-semibold">Tentative: Dinner with my Kids</h1>
							<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1">Mar 27, 19:00</span>
						</div>
						<span class="text-xs font-semibold text-[#3730a3] bg-[#e0e7ff] px-2 py-1 rounded-lg">Plan regular</span>
					</div>
				</div>
				<div class="space-y-2">
					<h1>April 2025</h1>
					<div class="!rounded-2xl outline outline-slate-200 m-1 px-4 py-2 hover:bg-slate-50">
						<div class="flex justify-between">
							<h1 class="text-sm font-semibold">Rodri & Mariem Visiting</h1>
							<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1">Apr 12</span>
						</div>
						<div class="inline-flex space-x-2">
							<span class="text-xs text-warning-900 font-semibold bg-warning-100 px-2 py-1 rounded-lg">Visita</span>
							<span class="text-xs text-info-600 font-semibold bg-info-100 px-2 py-1 rounded-lg">All day</span>
						</div>
					</div>
					<div class="!rounded-2xl outline outline-slate-200 m-1 px-4 py-2 hover:bg-slate-50">
						<div class="flex justify-between">
							<h1 class="text-sm font-semibold">Ojinha's Birthday (Mike's friend, at Ojinha's house)</h1>
							<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1">Apr 12, 20:00</span>
						</div>
						<div class="inline-flex space-x-2">
							<span class="text-xs text-green-900 font-semibold bg-green-100 px-2 py-1 rounded-lg">Evento</span>
						</div>
					</div>
				</div>
			</div>
		</template>
	</Card>
</template>

<script setup>

</script>

<style scoped>

</style>