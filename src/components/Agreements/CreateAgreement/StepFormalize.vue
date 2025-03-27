<template>
	<div class="flex flex-col space-y-4">
		<h1 class="text-xl font-semibold">Formalize Agreement</h1>
		<h2 class="text-gray-500">Based on your responses, we've drafted an agreement. Review and customize it as needed.</h2>
		<div class="space-y-6">
			<div class="flex flex-col w-full mx-2">
				<label class="font-semibold mb-2 text-sm">Agreement Title</label>
				<InputText
					name="title" placeholder="e.g., Weekly Cleaning Schedule" unstyled
					class="!rounded-full !bg-white border border-slate-200 text-slate-700 px-4 py-3 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col w-full mx-2">
				<label class="font-semibold mb-2 text-sm">Short Description</label>
				<InputText
					name="description" placeholder="A brief summary of the agreement" unstyled
					class="!rounded-full !bg-white border border-slate-200 text-slate-700 px-4 py-3 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col w-full mx-2">
				<label class="font-semibold mb-2 text-sm">Agreement Content</label>
				<TextArea
					name="content" unstyled rows="8" cols="30" placeholder="Detail the terms of your agreement here..."
					class="!rounded-3xl !bg-[#f9f8fc] border border-slate-200 text-sm text-slate-700 p-3 focus:!outline-primary-500" />
			</div>
			<div class="flex items-center space-x-3 bg-[#f9f8fc] mx-2 p-4 rounded-2xl">
				<i class="pi pi-check-circle text-primary-500 mb-5" style="font-size: 1.2rem" />
				<div>
					<h1 class="font-semibold">Digital Signature</h1>
					<span class="text-sm text-gray-500">Both partners will need to agree to this document.</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>


</script>

<style scoped>

</style>