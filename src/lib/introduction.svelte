<script>
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    let tabSet = 0;
</script>

<div>
    <TabGroup justify="justify-center" class="bg-pink-500 rounded-md p-3 md:w-[400px] lg:w-[500px] 2xl:w-[600px] text-white">
        <Tab bind:group={tabSet} name="tab1" value={0}>
            <svelte:fragment slot="lead"><p class="text-xl">Apa?</p></svelte:fragment>
        </Tab>
        <Tab bind:group={tabSet} name="tab2" value={1}><p class="text-xl">
            Siapa?
        </p></Tab>
        <Tab bind:group={tabSet} name="tab3" value={2}> <p class="text-xl">Dimana?</p></Tab>
        
        <Tab bind:group={tabSet} name="tab4" value={3}> <p class="text-xl">Bagaimana?</p></Tab>
        <Tab bind:group={tabSet} name="tab5" value={4}> <p class="text-xl">Kapan?</p></Tab>
        <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
               <p class="flex justify-center items-center">Gagah Gigih adalah Self Studio Photo di Pangkalan Bun yang menggabungkan seni dan teknologi</p>
            {:else if tabSet === 1}
                <p class="flex flex-col justify-center items-center">Anggota kami adalah content creator, designer, photographer & videographer, data analyst, bahkan IT Developer </p>
            {:else if tabSet === 2}
            <p class="flex justify-center items-center">Lokasi Studio Kami Jln Bendaha Kumai BTN Kumai Damai GG. Pepaya No. 31</p>
            {:else if tabSet === 3}
            <p class="flex justify-center items-center">Studio Kami di design para cinematographer dan photographer untuk menghasilkan foto yang indah</p>
            {:else if tabSet === 4}
            <a href="https://www.youtube.com/MultimediaPIctures" > Studio ini berdiri pada tahun 2023 tetapi kiprah kami di industri kreatif sudah sejak 2013 dimulai dengan Multimedia Pictures</a>
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>


			