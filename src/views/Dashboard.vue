<template>
	<div class="min-h-screen bg-slate-100 pb-20 space-y-4">
		<div class="px-4 pt-10 pb-4">
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div class="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
						<img src="@/assets/default_profile_image.png" class="w-full h-full object-cover" alt="user-profile" />
					</div>
					<div>
						<p class="text-sm text-slate-500">Hola!</p>
						<h2 class="font-bold">Julio</h2>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<button class="mr-3 bg-white">
						<span class="text-twodo-purple font-medium">{currentBond.name}</span>
					</button>
					<RouterLink :to="{name: 'bonds'}">
						<Button severity="secondary" class="!bg-white !rounded-2xl !text-sm !font-bold hover:!bg-primary-100">
							Vincular a tu pareja
						</Button>
					</RouterLink>
					<div class="relative">
						<RouterLink :to="{name: 'notifications'}">
							<button class="px-3 py-2 bg-white rounded-full hover:!bg-primary-100">
								<OverlayBadge value="2" severity="danger" size="small">
									<i class="pi pi-bell" />
								</OverlayBadge>
							</button>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
		<SearchBar />
		<UpcomingEvents />
		<div class="card flex flex-col items-center animate-bounce text-slate-400 text-sm">
			<span>Descubre más</span>
			<i class="pi pi-angle-down animate-fadeout animate-duration-1000 animate-infinite text-[2rem]" />
			<ScrollTop />
		</div>
		<QuickActionCards />
	</div>
</template>

<script setup>

import SearchBar from "@/components/Dashboard/SearchBar.vue";
import UpcomingEvents from "@/components/Dashboard/UpcomingEvents.vue";
import QuickActionCards from "@/components/Dashboard/QuickActionCards.vue";
</script>

<style scoped>

</style>
