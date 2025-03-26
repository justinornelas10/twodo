<template>
	<div class="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-b from-blue-50 to-white p-4">
		<div class="mb-8 text-center">
			<h1 class="text-4xl font-bold text-twodo-purple mb-2">TwoDo</h1>
		</div>
		<div class="flex flex-col w-full items-center space-y-4 mx-2">
			<p class="text-slate-600">Share your plans with your significant other</p>
			<div class="flex flex-col w-1/3 mx-2">
				<label class="font-semibold mb-2 text-sm">Email</label>
				<InputText
					name="email" placeholder="you@example.com" size="small" unstyled
					class="!rounded-full !bg-[#fafcff] border border-slate-200 text-slate-700 px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col w-1/3 mx-2 ">
				<label class="font-semibold mb-2 text-sm">Password</label>
				<Password
					:feedback="false" toggleMask size="small" placeholder="••••••••"
					class="rounded-full bg-[#fafcff] border border-slate-200" />
			</div>
			<RouterLink :to="{name: 'dashboard'}" class="bg-primary-500 w-1/3 rounded-2xl py-2 transition delay-100 duration-100 ease-out hover:scale-105 hover:bg-primary-400">
				<span class="flex justify-center text-white text-sm font-semibold ">Log in</span>
			</RouterLink>
			<div>
				<span class="text-sm text-slate-600">Don't have an account?
					<RouterLink :to="{ name: 'register'}" class="text-sm text-primary-500">
						<span>Sign up</span>
					</RouterLink>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>