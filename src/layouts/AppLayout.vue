<template>
	<div class="min-h-screen">
		<header>
			<NavBar />
		</header>
		<div class="pt-15">
			<RouterView />
		</div>
		<FloatingActionButton />
	</div>
</template>

<script setup>

import NavBar from "@/layouts/appComponents/NavBar.vue";
import FloatingActionButton from "@/components/widgets/FloatingActionButton.vue";
</script>

<style scoped>

</style>