<template>
	<nav class="fixed w-full z-40 mx-auto flex items-center justify-between p-4 lg:px-8 bg-white" aria-label="Global">
		<div class="inline-flex">
			<a href="/" class="text-primary-500 font-semibold text-xl px-2">
				TwoDo
			</a>
			<div class="hidden lg:flex lg:gap-x-12 items-center pl-8">
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">Dashboard</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">Wishlist</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">Calendar</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">chat</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">Agreements</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">expenses</a>
				<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 hover:underline hover:underline-offset-8">shared_folder</a>
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

</script>

<style scoped>

</style>