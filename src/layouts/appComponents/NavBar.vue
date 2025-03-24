<template>
	<nav class="fixed w-full z-40 mx-auto flex items-center justify-between p-4 lg:px-8 bg-white" aria-label="Global">
		<div class="inline-flex space-x-8">
			<a href="/" class="text-primary-500 font-semibold text-xl px-2 mt-1">
				TwoDo
			</a>
			<div class="flex gap-x-4 items-center">
				<RouterLink
					:to="{ name: 'dashboard'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'dashboard'}">
					Dashboard
				</RouterLink>
				<RouterLink
					:to="{ name: 'wishlist'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'wishlist'}">
					Wishlist
				</RouterLink>
				<RouterLink
					:to="{ name: 'calendar'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'calendar'}">
					Calendar
				</RouterLink>
				<RouterLink
					:to="{ name: 'chat'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'chat'}">
					chat
				</RouterLink>
				<RouterLink
					:to="{ name: 'agreements'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'agreements'}">
					Agreements
				</RouterLink>
				<RouterLink
					:to="{ name: 'expenses'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'expenses'}">
					Expenses
				</RouterLink>
				<RouterLink
					:to="{ name: 'shared-folder'}"
					class="text-sm/6 text-gray-600 hover:bg-slate-100 rounded-2xl px-3 py-2"
					:class="{'font-semibold text-primary-600 bg-primary-100': currentRoute === 'shared-folder'}">
					shared_folder
				</RouterLink>
			</div>
		</div>
		<div>
			<button class="px-3 py-2 hover:bg-primary-100 rounded-full">
				<i class="pi pi-bookmark" style="font-size: 0.9rem" />
			</button>
			<button class="px-3 py-2 hover:bg-primary-100 rounded-full">
				<i class="pi pi-bell" style="font-size: 0.9rem" />
			</button>
			<button class="px-3 py-2 hover:bg-primary-100 rounded-full space-x-1">
				<Avatar label="JU" shape="circle" class="!bg-warning-100" />
				<span>Julio</span>
			</button>
		</div>
	</nav>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();
const currentRoute = computed(() => route.name)

</script>

<style scoped>

</style>