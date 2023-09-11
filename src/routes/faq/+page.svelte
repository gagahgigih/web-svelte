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
                <Accordion class="varian-filled-primary bg-pink-500/70 rounded-md p-2 text-white">
                    <AccordionItem   open>
                        <svelte:fragment  slot="summary">
                            <p class="bg-secondary-500 p-2 font-bold text-lg rounded-md">Lokasi dimana kak?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Di Kumai ya</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem   open>
                        <svelte:fragment  slot="summary">
                            <p class="bg-secondary-500 p-2 font-bold text-lg rounded-md">Bagaimana dengan Pakaian?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Fashion terserah kalian</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem   open>
                        <svelte:fragment  slot="summary">
                            <p class="bg-secondary-500 p-2 font-bold text-lg rounded-md">Apakah ada aturan khusus?</p>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="bg-pink-500/50 underline text-lg font-semibold p-2 rounded-md">Sepatu dilarang dipakai di studio</p>
                    </svelte:fragment>
                    </AccordionItem>
                    <!-- ... -->
                </Accordion>
            </div>
        </div>
    </div>   
</section>