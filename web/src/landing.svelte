<script lang="ts">

    import { changePage } from "./pageFuncs";

    async function getColourCount() {
        await new Promise(resolve => setTimeout(resolve, 600))

        // make sure to add a comma every 3 digits
        let number = 14863351;
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

</script>

<main>

    <div id="HeaderHolder">
        <h2>There are</h2>
        <h1>16,777,216</h1>
        <h2>colours, and</h2>
        {#await getColourCount()}
            <h1>...</h1>
        {:then count}
            <h1 class="Rainbow">{count}</h1>
        {:catch error}
            <h1>a few</h1>
        {/await}
        <h2>have names!</h2>
    </div>

    <div id="ButtonHolder">
        <button on:click={changePage("")}>I'll name some!</button>
        <button on:click={changePage("Picker")}>Explore</button>
    </div>
    
</main>

<style>

    main
    {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #HeaderHolder
    {
        text-align: center;
    }

    .Rainbow
    {
        background: linear-gradient(to right, #cdb4db, #ffc8dd, #ffafcc, #bde0fe, #a2d2ff), url("noise.png");
        background-size: 300px;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: rainbow 10s linear infinite;
    }

    h1{
        font-size: 40px;
    }

    h2, h1
    {
        margin: 0px;
    }

    #ButtonHolder
    {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 200px;

        margin-top: 20px;
    }

</style>