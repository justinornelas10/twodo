<template>
	<Drawer
		v-model:visible="visible" position="bottom" style="height: 60%"
		pt:mask:class="backdrop-brightness-30" class="!bg-slate-50">
		<div>
			<Stepper value="1">
				<StepList>
					<Step value="1" />
					<Step value="2" />
					<Step value="3" />
				</StepList>
				<StepPanels>
					<StepPanel v-slot="{ activateCallback }" value="1">
						<div class="flex flex-col justify-center items-center w-full space-y-4 bg-slate-50">
							<div class="bg-[#ede9fe] p-5 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9 text-[#7c3aed]">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
								</svg>
							</div>
							<h1 class="text-lg font-semibold text-foreground">Welcome to Agreements!</h1>
							<span class="text-sm text-gray-500 ">Agreements help you and your partner set clear expectations and boundaries in your relationship.</span>

							<div class="flex justify-center w-full">
								<button class="rounded-3xl bg-[#7c3aed] hover:bg-primary-700 py-1.5 w-full" @click="activateCallback('2')">
									<span class="text-white">Next</span>
								</button>
							</div>
						</div>
					</StepPanel>
					<StepPanel v-slot="{ activateCallback }" value="2">
						<div class="flex flex-col justify-center items-center w-full space-y-4 bg-slate-50">
							<div class="bg-[#ede9fe] p-5 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 size-9 text-[#7c3aed]">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
								</svg>
							</div>
							<h1 class="text-lg font-semibold text-foreground">Better Communication</h1>
							<span class="text-sm text-gray-500 ">Define agreements to avoid misunderstandings and improve your relationship communication.</span>

							<div class="flex justify-center w-full space-x-2">
								<button class="rounded-3xl bg-slate-50 border border-slate-200 hover:bg-primary-100 py-2 px-4" @click="activateCallback('1')">
									<span class="font-semibold">Back</span>
								</button>
								<button class="rounded-3xl bg-[#7c3aed] hover:bg-primary-700 py-1.5 w-full" @click="activateCallback('3')">
									<span class="text-white">Next</span>
								</button>
							</div>
						</div>
					</StepPanel>
					<StepPanel v-slot="{ activateCallback }" value="3">
						<div class="flex flex-col justify-center items-center w-full space-y-4 bg-slate-50">
							<div class="bg-[#ede9fe] p-5 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9 text-[#7c3aed]">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
								</svg>
							</div>
							<h1 class="text-lg font-semibold text-foreground">Get Started</h1>
							<span class="text-sm text-gray-500 ">Browse recommended agreements or create your own custom agreements for your specific needs.</span>

							<div class="flex justify-center w-full space-x-2">
								<button class="rounded-3xl bg-slate-50 border border-slate-200 hover:bg-primary-100 py-2 px-4" @click="activateCallback('2')">
									<span class="font-semibold">Back</span>
								</button>
								<button class="rounded-3xl bg-[#7c3aed] hover:bg-primary-700 py-1.5 w-full" @click="closeWelcome()">
									<span class="text-white">Get Started</span>
								</button>
							</div>
						</div>
					</StepPanel>
				</StepPanels>
			</Stepper>
		</div>
	</Drawer>
</template>

<script setup>
import {onMounted, ref} from "vue";

const visible = ref(false);

onMounted(() => {
    visible.value = true;
})

const closeWelcome = () => {
    visible.value = false;
}

</script>

<style scoped>

</style>