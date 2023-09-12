<script>
    import { Stepper, Step } from "@skeletonlabs/skeleton";
</script>

<section>
    
<Stepper border='border-secondary' class="p-8 md:w-[400px] lg:w-[500px] 2xl:w-[600px] rounded-lg bg-pink-500 text-white" buttonCompleteLabel="Selesai" stepTerm="Langkah" buttonBackLabel="Kembali" buttonNextLabel="Selanjutnya">
	<Step>
		<svelte:fragment slot="header">Pertama</svelte:fragment>
		Klik Tombol "Booking Disini" pada bagian atas dan isi semua data dengan benar
	</Step>
	<Step>
		<svelte:fragment slot="header">Kedua</svelte:fragment>
		Pilih Tanggal dan slot anda, ingat setiap booking hanya terdiri dari 30 menit
	</Step>
    <Step>
		<svelte:fragment slot="header">Ketiga</svelte:fragment>
		Datang ke studio. Usahakan datang sebelum waktu yang ditentukan untuk menghindari kehabisan waktu
	</Step>
	<Step>
		<svelte:fragment slot="header">Keempat</svelte:fragment>
		Silahkan berfoto ria di studio kami maksimalkan waktu anda dan gunakan aksesoris kami sebagai ide anda
	</Step>
    <Step>
		<svelte:fragment slot="header">Kelima</svelte:fragment>
		Jika selesai lakukan pembayaran kepada admin dan jangan lupa barang bawaan serta photo yang telah dicetak
	</Step>
	<!-- ... -->
</Stepper>
			
</section>