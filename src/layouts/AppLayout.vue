<template>
	<div class="min-h-screen">
		<header>
			<NavBar />
		</header>
		<div class="pt-15">
			<RouterView />
		</div>
	</div>
</template>

<script setup>

import NavBar from "@/layouts/appComponents/NavBar.vue";
</script>

<style scoped>

</style>