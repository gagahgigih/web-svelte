<script>
    import { Stepper, Step } from "@skeletonlabs/skeleton";
</script>

<section>
    
<Stepper border='border-secondary' class="p-8 md:w-[400px] lg:w-[500px] 2xl:w-[600px] rounded-lg bg-pink-500 text-white" buttonCompleteLabel="Selesai" stepTerm="Langkah" buttonBackLabel="Kembali" buttonNextLabel="Selanjutnya">
	<Step>
		<svelte:fragment slot="header">Pertama</svelte:fragment>
		Klik Tombol "Booking Disini" pada bagian atas
	</Step>
	<Step>
		<svelte:fragment slot="header">Kedua</svelte:fragment>
		Pilih Tanggal dan slot anda
	</Step>
    <Step>
		<svelte:fragment slot="header">Ketiga</svelte:fragment>
		Datang ke studio
	</Step>
    <Step>
		<svelte:fragment slot="header">Keempat</svelte:fragment>
		Lakukan Pembayaran kepada admin 
	</Step>
	<!-- ... -->
</Stepper>
			
</section>