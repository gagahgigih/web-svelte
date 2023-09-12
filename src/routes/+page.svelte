<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import Booking from "$lib/booking.svelte";
	import Introduction from "$lib/introduction.svelte";

	

</script>
<svelte:head>
  <title>Gagah Gigih Studio</title>
  <meta name="description" content="Self Studio Photo Terbaik di Pangkalan Bun" />
  <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun">
  <meta name="Gagah Gigih" content="Gagah Gigih Studio">
  <meta charset="UTF-8">
</svelte:head>
<div class="w-full h-full bg-cover bg-home-pattern bg-no-repeat bg-top bg-fixed p-8">
	<div class="mx-auto container">
		<div>
			<div class="flex flex-col justify-center items-center gap-2">
				<div>
					<h1 class="h1 underline">Siapa Kami?</h1>
				</div>
				<Introduction />
			</div>
			<div class="flex flex-col justify-center items-center gap-6 mt-6">
				<div>
					<h1 class="h1 underline">Reservasi</h1>
				</div>
				<div class="flex gap-2">
					<button class="btn btn-md variant-filled-primary text-white transition duration-300 ease-in-out hover:-translate-y-2 border-white border-2 shadow-md shadow-pink-500">
						<a href="https://gagahgigih.youcanbook.me/">Booking disini ❗❗❗	</a>
					</button>
					<button class="btn btn-md variant-filled-primary text-white transition duration-300 ease-in-out hover:-translate-y-2 border-white border-2 shadow-md shadow-pink-500">
						<a href="https://drive.google.com/drive/folders/1S9Kv5M9w15SS0DypQ0EJZ54T9RKK37VO?usp=sharing">Lihat Harga 💳</a>
					</button>
				</div>
			</div>
			<div class="flex flex-col justify-center items-center gap-6 mt-6">
				<div>
					<h1 class="h1 underline">Informasi Lain</h1>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-6">
					<button class="btn btn-md variant-filled-secondary border-black shadow-md shadow-tertiary-500 border-2 text-white transition  duration-300 ease-in-out hover:-translate-y-2">
						<a href="/gallery">Gallery 📷</a>
					</button>
					<button class="btn btn-md variant-filled-secondary border-black shadow-md shadow-tertiary-500 border-2 text-white transition  duration-300 ease-in-out hover:-translate-y-2">
						<a href="/faq">FAQ ❓</a>
					</button>
					<button class="btn btn-md variant-filled-secondary border-black shadow-md shadow-tertiary-500 border-2 text-white transition  duration-300 ease-in-out hover:-translate-y-2">
						<a href="/aksesoris">Aksesoris 👑</a>
					</button>
					<button class="btn btn-md variant-filled-secondary border-black shadow-md shadow-tertiary-500 border-2 text-white transition  duration-300 ease-in-out hover:-translate-y-2">
						<a href="https://goo.gl/maps/uDKU2hfC3dVQnoWv5">Lokasi 🚐</a>
					</button>
					
				</div>
			</div>
			<div class="flex flex-col justify-center items-center gap-6 mt-6">
				<div>
					<h1 class="h1 underline">Cara Booking</h1>
				</div>
				<div>
					<Booking />
				</div>
			</div>	
		</div>
	</div>
</div>
