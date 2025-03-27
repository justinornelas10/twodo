<template>
	<div class="flex flex-col space-y-4">
		<h1 class="text-xl font-semibold">Compare Responses</h1>
		<h2 class="text-gray-500">Compare your responses with your partner's to identify areas of agreement and difference.</h2>
		<div class="space-y-6">
			<div class="space-y-5">
				<p class="font-semibold">What type of relationship are you looking for?</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold mt-2">Your Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold">Partner's Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
				</div>
				<div class="bg-blue-50 py-2 px-3 rounded-2xl">
					<span class="font-semibold">Agreement Level</span>
					<div class="flex">
						<ProgressBar
							:value="25" class=" flex-1"
							:pt="{
								value: {class: '!bg-red-500'}
							}" />
						<span class="text-xs font-semibold pl-2">Low</span>
					</div>
				</div>
			</div>
			<div class="space-y-5">
				<p class="font-semibold">How do you feel about spending time apart?</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold mt-2">Your Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold">Partner's Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
				</div>
				<div class="bg-blue-50 py-2 px-3 rounded-2xl">
					<span class="font-semibold">Agreement Level</span>
					<div class="flex">
						<ProgressBar
							:value="50" class="flex-1"
							:pt="{
								value: {class: '!bg-yellow-500'}
							}" />
						<span class="text-xs font-semibold pl-2">Medium</span>
					</div>
				</div>
			</div>
			<div class="space-y-5">
				<p class="font-semibold">What are your boundaries regarding friendships?</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold mt-2">Your Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
					<div class="bg-slate-50 p-4 rounded-2xl">
						<span class="text-sm font-semibold">Partner's Response</span>
						<div class="flex justify-between">
							<button
								v-for="value in [1, 2, 3, 4, 5]"
								:key="value"
								type="button"
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
									selectedValue === value
										? 'bg-primary-500 text-white'
										: 'bg-gray-200 hover:bg-gray-300'
								]">
								{{ value }}
							</button>
						</div>
					</div>
				</div>
				<div class="bg-blue-50 py-2 px-3 rounded-2xl">
					<span class="font-semibold">Agreement Level</span>
					<div class="flex">
						<ProgressBar :value="100" class=" flex-1" />
						<span class="text-xs font-semibold pl-2">High</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref} from "vue";

const selectedValue = ref(null);

</script>

<style scoped>

</style>