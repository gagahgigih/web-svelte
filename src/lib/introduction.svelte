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
    
        <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
               <p class="flex justify-center items-center">Gagah Gigih adalah self studio photo di Pangkalan Bun</p>
            {:else if tabSet === 1}
               <p class="flex justify-center items-center">Kami berpengalaman di bidang industri kreatif</p>
            {:else if tabSet === 2}
            <p class="flex justify-center items-center">Lokasi Studio Kami di Kumai</p>
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>


			