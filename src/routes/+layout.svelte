<script lang="ts">
	import '../app.postcss';
	import {AppShell, AppBar, Avatar} from '@skeletonlabs/skeleton'
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background='bg-primary-500' gridColumns="grid-cols-1" slotDefault="place-self-center" slotTrail="place-content-end" >
			
				<div class="flex gap-5 items-center">
					<Avatar width="w-12" src="logo.png" />
					<a href="/" class="transition duration-500 ease-in-out h3 hover:underline  text-white" >Home</a>
					<a href="/gallery" class="transition duration-500 ease-in-out h3 hover:underline  text-white" >Gallery</a>
					<a href="https://gagahgigih.youcanbook.me/" class="transition duration-500 ease-in-out h3 hover:underline  text-white" >Booking</a>
				</div>
		
		
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter" >
		<div class="bg-primary-500 py-2">
			<div class="flex justify-center items-center w-full">
				<div class="flex flex-col justify-center items-center">
					<div>
						<p class="h3 text-white">Contact Us</p>
					</div>
					<div class="flex ">
						<a href= "mailto: cs@gagahgigih.site">
							<img src="/svg/emails.svg" alt="email" class="hover:-translate-y-2 transition duration-300 ease-in-out bg-tertiary-500 rounded-lg p-2 m-2 w-10" />
						</a>
						<a href="https://www.instagram.com/gagah_gigih/">
							<img src="/svg/ig.svg" alt="instagram" class="hover:-translate-y-2 transition duration-300 bg-tertiary-500 rounded-lg p-2 m-2 w-10" />
						</a>
						<a href="https://wa.me/6282137263180?text=Halo%20kak%20boleh%20bertanya%20sedikit?">
							<img src="/svg/wa.svg" alt="whatssapp" class="hover:-translate-y-2 transition duration-300 bg-tertiary-500 rounded-lg p-2 m-2 w-10" />
						</a>
						<a href="https://www.youtube.com/MultimediaPIctures">
							<img src="/svg/yt.svg" alt="youtube mp" class="hover:-translate-y-2 transition duration-300 bg-tertiary-500 rounded-lg p-2 m-2 w-10" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</svelte:fragment>

</AppShell>
