<script>
    import {Accordion, AccordionItem} from "@skeletonlabs/skeleton"
</script>
<svelte:head>
  <title>FAQ | Gagah Gigih</title>
  <meta name="description" content="Self Studio Photo Terbaik di Pangkalan Bun" />
  <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun">
  <meta name="Gagah Gigih" content="Gagah Gigih Studio">
</svelte:head>
<section>
    <div class="w-full h-screen bg-cover bg-faq-pattern bg-no-repeat bg-top bg-fixed p-8">
        <div class="mx-auto container">
            <div>
                <h1 class="h1 text-bold my-3">Yang sering ditanyakan</h1>
            </div>
            <div class="flex justify-center items-center">
                <Accordion class="varian-filled-primary bg-neutral-300/70 rounded-md p-2 text-white">
                    <AccordionItem   open>
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Lokasi dimana kak?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><a href="https://www.google.com/maps/place/2%C2%B043'56.4%22S+111%C2%B042'53.9%22E/@-2.732338,111.714966,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-2.732338!4d111.714966?entry=ttu" class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Klik disini untuk google maps </a>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Bagaimana dengan Pakaian?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Fashion terserah kalian tapi usahakan yang aestethic ya</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Apakah ada aturan khusus?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Agar tidak merusak set kami melarang pengunjung menggunakan sepatu di dalam studio</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Kenapa booking sejam tapi hanya dapat 30 menit?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Kalian dapat slot 1 jam dengan durasi menggunakan kamera studio selama 30 menit, waktu sisanya digunakan untuk bersiap dan melakukan print photo</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Apakah boleh membawa hewan peliharaan?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Mohon maaf Hewan peliharaan dilarang ya kak</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Kok pas datang malah toko alat tulis?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Studio berada di lantai 2 ya kak bisa tanya kepada petugas agar diarahkan</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem  >
                        <svelte:fragment  slot="summary">
                            <p class="bg-primary-500 p-2 font-bold text-lg rounded-md">Aksesoris boleh dibawa pulang?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Mohon maaf hal Aksesoris milik studio dan dilarang dibawa pulang</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <!-- ... -->
                </Accordion>
            </div>
        </div>
    </div>   
</section>