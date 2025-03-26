<template>
	<div class="bg-white mx-auto px-28 py-12">
		<div class="flex flex-col w-full items-center space-y-4 mx-2">
			<div class="flex justify-between items-center w-1/3">
				<RouterLink :to="{ name: 'login'}">
					<i class="pi pi-angle-left bg-slate-100 p-3 rounded-full" />
				</RouterLink>
				<h1 class="text-3xl font-bold text-twodo-purple ml-auto mr-auto">TwoDo</h1>
			</div>
			<div class="flex flex-col w-1/3 mx-2">
				<label class="font-semibold mb-2 text-sm">Name</label>
				<InputText
					name="name" placeholder="Your name" size="small" unstyled
					class="!rounded-full !bg-white border border-slate-200 text-slate-700 text-sm px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col w-1/3 mx-2">
				<label class="font-semibold mb-2 text-sm">Email</label>
				<InputText
					name="email" placeholder="you@example.com" size="small" unstyled
					class="!rounded-full !bg-white border border-slate-200 text-slate-700 text-sm px-4 py-2 focus:!outline-primary-500" />
			</div>
			<div class="flex flex-col w-1/3 mx-2 ">
				<label class="font-semibold mb-2 text-sm">Password</label>
				<Password
					:feedback="false" toggleMask size="small" placeholder="••••••••" name="password"
					class="rounded-full bg-white border border-slate-200" />
			</div>
			<div class="flex flex-col w-1/3 mx-2 ">
				<label class="font-semibold mb-2 text-sm">Confirm Password</label>
				<Password
					:feedback="false" toggleMask size="small" placeholder="••••••••" name="confirmPassword"
					class="rounded-full bg-white border border-slate-200" />
			</div>
			<div class="flex flex-col w-1/3 mx-2">
				<label class="font-semibold mb-2 text-sm">Partner's Email (Optional)</label>
				<InputText
					name="partnerEmail" placeholder="partner@example.com" size="small" unstyled
					class="!rounded-full !bg-white border border-slate-200 text-slate-700 text-sm px-4 py-2 focus:!outline-primary-500" />
				<span class="text-slate-500 text-xs mt-1">If your partner is already registered, you'll be connected automatically.</span>
			</div>
			<div class="flex justify-start space-x-3 items-center w-1/3">
				<Checkbox binary />
				<span class="text-sm">I accept the
					<span class="text-primary-500 text-sm">terms and conditions</span>
				</span>
			</div>
			<button class="bg-primary-500 w-1/3 rounded-2xl py-2 transition delay-100 duration-100 ease-out hover:scale-105 hover:bg-primary-400">
				<span class="flex justify-center text-white text-sm font-semibold ">Create Account</span>
			</button>
			<div>
				<span class="text-sm text-slate-600">Already have an account?
					<RouterLink :to="{ name: 'login'}" class="text-sm text-primary-500">
						<span>Log in</span>
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