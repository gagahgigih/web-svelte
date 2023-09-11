<script>
    import img1 from '$lib/images/1.jpg';
    import img2 from '$lib/images/2.jpg';
    import img3 from '$lib/images/3.jpg';
    import img4 from '$lib/images/4.jpg';
    import img5 from '$lib/images/5.jpg';
    import img6 from '$lib/images/6.jpg';
</script>
<svelte:head>
  <title>Gallery | Gagah Gigih</title>
  <meta name="description" content="Gallery kami photo dari Self Studio Photo Terbaik di Pangkalan Bun" />
  <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Gallery">
  <meta name="Gagah Gigih" content="Gagah Gigih Studio">
</svelte:head>
<section>
    <div class="w-full bg-cover bg-gallery-pattern bg-no-repeat bg-top bg-fixed p-8">
        <div class="flex flex-col justify-center items-center">
            <div>
                <h1 class="h1 text-bold my-6"> Gallery Kami</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500"  src={img1} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img2} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img3} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img4} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img5} alt="" />
                </div>
                <div class="p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <img class="border border-primary-500 rounded-md shadow-md  shadow-pink-500" src={img6} alt="" />
                </div>
            </div>
        </div>
    </div>
</section>        