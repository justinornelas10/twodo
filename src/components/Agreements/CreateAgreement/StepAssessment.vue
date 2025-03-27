<template>
	<div class="flex flex-col space-y-4">
		<h1 class="text-xl font-semibold">Self Assessment</h1>
		<h2 class="text-gray-500">Answer these questions to understand your own expectations and boundaries.</h2>
		<div class="space-y-6">
			<div class="space-y-5">
				<p class="font-semibold">What type of relationship are you looking for?</p>
				<div class="flex justify-between">
					<span class="text-xs text-gray-600">Not important</span>
					<div class="flex gap-3">
						<button
							v-for="value in [1, 2, 3, 4, 5]"
							:key="value"
							type="button"
							:class="[
								'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
								selectedValue === value
									? 'bg-primary-500 text-white'
									: 'bg-gray-100 hover:bg-gray-200'
							]"
							@click="setImportance(value)">
							{{ value }}
						</button>
					</div>
					<span class="text-xs text-gray-600">Very important</span>
				</div>
			</div>
			<div class="space-y-5">
				<p class="font-semibold">How do you feel about spending time apart?</p>
				<div class="flex justify-between">
					<span class="text-xs text-gray-600">Not important</span>
					<div class="flex gap-3">
						<button
							v-for="value in [1, 2, 3, 4, 5]"
							:key="value"
							type="button"
							:class="[
								'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
								selectedValue === value
									? 'bg-primary-500 text-white'
									: 'bg-gray-100 hover:bg-gray-200'
							]"
							@click="setImportance(value)">
							{{ value }}
						</button>
					</div>
					<span class="text-xs text-gray-600">Very important</span>
				</div>
			</div>
			<div class="space-y-5">
				<p class="font-semibold">What are your boundaries regarding friendships?</p>
				<div class="flex justify-between">
					<span class="text-xs text-gray-600">Not important</span>
					<div class="flex gap-3">
						<button
							v-for="value in [1, 2, 3, 4, 5]"
							:key="value"
							type="button"
							:class="[
								'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
								selectedValue === value
									? 'bg-primary-500 text-white'
									: 'bg-gray-100 hover:bg-gray-200'
							]"
							@click="setImportance(value)">
							{{ value }}
						</button>
					</div>
					<span class="text-xs text-gray-600">Very important</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import {ref} from "vue";

const selectedValue = ref(null);

const setImportance = (value) => {
    selectedValue.value = value;
};
</script>

<style scoped>

</style>