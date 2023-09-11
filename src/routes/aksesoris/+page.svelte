<script>
    import img7 from '$lib/images/7.jpg';
    import img8 from '$lib/images/8.jpg';

</script>
<svelte:head>
  <title>Aksesoris | Gagah Gigih</title>
  <meta name="description" content="Gallery kami photo dari Self Studio Photo Terbaik di Pangkalan Bun" />
  <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Gallery">
  <meta name="Gagah Gigih" content="Gagah Gigih Studio">
</svelte:head>
<section>
    <div class="w-full h-screen bg-cover bg-gallery-pattern bg-no-repeat bg-top bg-fixed p-8">
        <div class="flex flex-col justify-center items-center">
            <div>
                <h1 class="h1 text-bold my-6"> Aksesoris Kami</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md shadow-pink-500" src={img7} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img8} alt="" />
                </div>
               
            </div>
        </div>
    </div>
</section>        