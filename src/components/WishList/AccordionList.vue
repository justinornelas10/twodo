<template>
	<Card class="card-wishlist !rounded-2xl !shadow-none p-4">
		<template #header>
			<div class="flex justify-between">
				<p class="text-sm text-slate-400">13 items in your wishlist</p>
				<div class="flex space-x-4">
					<button class="text-primary-500 font-semibold text-sm inline-flex space-x-2 items-center" @click="randomModal.beforeOpen()">
						<svg
							class="h5 w-5" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="shuffleIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter"
							fill="none" color="#8D6CCF">
							<path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" /> <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />
							<path d="M19 4L22 7L19 10" />
							<path d="M19 13L22 16L19 19" /> 
						</svg>
						<span>Random suggestion</span>
					</button>
					<RouterLink :to="{name: 'dashboard'}" class="text-primary-500 font-semibold text-sm inline-flex space-x-2 items-center">
						<i class="pi pi-calendar" />
						<span>Calendar view</span>
						<i class="pi pi-angle-right" />
					</RouterLink>
				</div>
			</div>
			<div class="hidden lg:block h-px w-full lg:bg-gray-900/10 mt-4" aria-hidden="true" />
			<div>
				<Accordion value="0">
					<AccordionPanel value="0" class="!shadow-none">
						<AccordionHeader>
							<p class="text-lg">Restaurantes</p>
						</AccordionHeader>
						<AccordionContent>
							<div class="grid grid-cols-2 gap-4">
								<CardWishList
									header="Pujol"
									description="Famous restaurant with contemporary Mexican cuisine by chef Enrique Olvera"
									location="Tennyson 133, Polanco, CDMX"
									cuisine="Contemporary Mexican" />
								<CardWishList
									header="Quintonil"
									description="Refined Mexican cuisine featuring local ingredientes"
									location="Newton 55, Polanco, CDMX"
									cuisine="Mexican" />
								<CardWishList
									header="El Califa"
									description="Best tacos in town for casual dinner"
									location="Altata 22, Condesa, CDMX"
									cuisine="Mexican" />
								<CardWishList
									header="Maximo Bistrot"
									description="Farm-to-table bistro with seasonal menu"
									location="Tonalá 133, Roma Norte, CDMX"
									cuisine="Mexican" />
							</div>
						</AccordionContent>
					</AccordionPanel>
					<AccordionPanel value="1" class="!shadow-none">
						<AccordionHeader>
							<p class="text-lg">Viajes</p>
						</AccordionHeader>
						<AccordionContent>
							<div class="grid grid-cols-2 gap-4">
								<CardWishList
									header="Tulum Weeknd Trip"
									description="Beach weekend to relax and visit the ruins"
									location="Tulum, Quintana Roo, México" />
								<CardWishList
									header="San Miguel de Allende"
									description="Colonial getaway with great restaurants and art scene"
									location="San Miguel Allende, Guanajuato, México" />
								<CardWishList
									header="Oaxaca City Cultural Trip"
									description="Visit museums, try local cuisine and buy artisan crafts"
									location="Oaxaca City, Oaxaca, México" />
							</div>
						</AccordionContent>
					</AccordionPanel>
					<AccordionPanel value="2" class="!shadow-none">
						<AccordionHeader>
							<p class="text-lg">Bares</p>
						</AccordionHeader>
						<AccordionContent>
							<div class="grid grid-cols-2 gap-4">
								<CardWishList
									header="Handshake Speakeasy"
									description="Hidden cocktail bar with experimental drinks"
									location="Amberes 65, Juárez, CDMX" />
								<CardWishList
									header="Gin Gin"
									description="Trendy bar with extensive gin selection"
									location="Oaxaca 87, Roma Norte, CDMX" />
							</div>
						</AccordionContent>
					</AccordionPanel>
					<AccordionPanel value="3" class="!shadow-none">
						<AccordionHeader>
							<p class="text-lg">Actividades</p>
						</AccordionHeader>
						<AccordionContent>
							<div class="grid grid-cols-2 gap-4">
								<CardWishList
									header="Hot Air Balloon in Teotihuacán"
									description="See the pyramids from above at sunrise"
									location="Teotihuacán, Estado de México" />
								<CardWishList
									header="Cooking Class at Casa Jacaranda"
									description="learn to make traditional Mexican dishes"
									location="Casa Jacaranda, Roma Norte, CDMX" />
							</div>
						</AccordionContent>
					</AccordionPanel>
					<AccordionPanel value="4" class="!shadow-none">
						<AccordionHeader>
							<p class="text-lg">Peliculas/Series</p>
						</AccordionHeader>
						<AccordionContent>
							<div class="grid grid-cols-2 gap-4">
								<CardWishList
									header="The Bear (TV Show)"
									description="Drama series about a chef who returns to run his family restaurant" />
								<CardWishList
									header="Dune: Part Two"
									description="Sci-fi epic based on Frank Herbert's novel" />
							</div>
						</AccordionContent>
					</AccordionPanel>
				</Accordion>
			</div>
		</template>
	</Card>
	<RandomSuggestionModal ref="randomModal" />
</template>

<script setup>
import CardWishList from "@/components/widgets/Cards/CardWishList.vue";
import RandomSuggestionModal from "@/components/WishList/RandomSuggestionModal.vue";
import {ref} from "vue";

const randomModal = ref(null);
</script>


<style scoped>

</style>