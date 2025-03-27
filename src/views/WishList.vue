<template>
	<div class="min-h-screen bg-slate-100 pb-20 space-y-4">
		<div class="px-44 pt-40 pb-4">
			<div class="flex justify-between items-center">
				<div class="flex items-center">
					<div>
						<h1 class="text-2xl font-bold">Your Wishlist</h1>
						<p class="text-slate-500">Save ideas for future plans and activities</p>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<Button
						label="Add Category" icon="pi pi-folder" size="small"
						class="btn-hover !bg-slate-50 !text-black !px-5 !border-slate-200 !rounded-2xl hover:!bg-primary-100"
						@click="categoryModal.beforeOpen()" />
					<Button
						label="Add Idea" icon="pi pi-plus" size="small"
						class="btn-hover !bg-primary-500 !px-5 text-white !border-none !rounded-2xl"
						@click="ideaModal.beforeOpen()" />
				</div>
			</div>
			<div class="pt-4">
				<AccordionList />
			</div>
		</div>
	</div>
	<AddCategoryModal ref="categoryModal" />
	<AddIdeaModal ref="ideaModal" />
</template>

<script setup>
import {ref} from "vue";
import AccordionList from "@/components/WishList/AccordionList.vue";
import AddCategoryModal from "@/components/WishList/AddCategoryModal.vue";
import AddIdeaModal from "@/components/WishList/AddIdeaModal.vue";

const categoryModal = ref(null);
const ideaModal = ref(null);
</script>

<style scoped>

</style>