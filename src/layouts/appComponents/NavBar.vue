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
		<div class="flex items-center">
			<RouterLink :to="{name: 'bookmarks'}" class="px-3 py-2 hover:bg-primary-100 rounded-full">
				<i class="pi pi-bookmark" style="font-size: 0.9rem" />
			</RouterLink>
			<RouterLink :to="{name: 'notifications'}" class="px-3 py-2 hover:bg-primary-100 rounded-full">
				<i class="pi pi-bell" style="font-size: 0.9rem" />
			</RouterLink>
			<div>
				<button class="px-3 py-2 hover:bg-primary-100 rounded-full space-x-1" @click="toggleProfileMenu">
					<Avatar label="JU" shape="circle" class="!bg-warning-100" />
					<span>Julio</span>
				</button>
				<transition
					enter-active-class="transition ease-out duration-100"
					enter-from-class="transform opacity-0 scale-95"
					enter-to-class="transform opacity-100 scale-100"
					leave-active-class="transition ease-in duration-75"
					leave-from-class="transform opacity-100 scale-100"
					leave-to-class="transform opacity-0 scale-95">
					<div
						v-if="openProfileMenu"
						class="absolute right-5 top-12 lg:top-18 z-10 w-32 origin-top-right bg-white py-1 shadow-lg rounded-2xl border border-slate-100"
						role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
						<div class="flex flex-col justify-start space-y-1">
							<RouterLink :to="{name: 'profile'}" class="hover:bg-primary-100 rounded-2xl mx-2 py-1">
								<span class="flex justify-start mx-4 text-sm">Profile</span>
							</RouterLink>
							<RouterLink :to="{name: 'bonds'}" class="hover:bg-primary-100 rounded-2xl mx-2 py-1">
								<span class="flex justify-start mx-4 text-sm">Bonds</span>
							</RouterLink>
							<div class="hidden lg:block h-px w-full lg:bg-gray-900/10" aria-hidden="true" />
							<button class="hover:bg-primary-100 rounded-2xl  mx-2 py-1">
								<span class="flex justify-start mx-4 text-sm">Logout</span>
							</button>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</nav>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";

const route = useRoute();
const currentRoute = computed(() => route.name)

const openProfileMenu = ref(false);

const toggleProfileMenu = () => {
    openProfileMenu.value = !openProfileMenu.value;
}


</script>

<style scoped>

</style>