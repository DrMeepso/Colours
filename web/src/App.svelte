<script lang="ts">

    import { changePage } from "./pageFuncs";

    // components
    import Landing from './landing.svelte';

    enum Pages {
        Landing,
        Picker
    }

    let CurrentPage: Pages = Pages.Landing;

    // on page hash change
    window.onhashchange = () => {
        loadPage();
    }

    function loadPage() {
        switch (window.location.hash) {
            case "#Picker":
                CurrentPage = Pages.Picker;
                break;
            default:
                CurrentPage = Pages.Landing;
                break;
        }
    }

    loadPage();

</script>

<main>

    <div id="DisplayBox">

        <p style="margin-top: 3px;">colours.xr0.xyz</p>

        <div id="ContentHolder">
            {#if CurrentPage === Pages.Landing}
                <Landing />
            {/if}
        </div> 

        {#if CurrentPage === Pages.Landing}
            <p style="margin-bottom: 3px;">Meepso was here</p>
        {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={changePage("#")} style="cursor: pointer;">
                <p style="margin-bottom: 3px; opacity: 0.5;">Return home!</p>
            </a>
        {/if}

    </div>

</main>

<style>

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #DisplayBox {
        background-color: #ffffff;

        width: 300px;
        height: 500px;
        border: solid 1px #000000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 15px;

        margin: auto auto;

        overflow: hidden;

        padding: 5px;

    }

    #ContentHolder
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 34px - 6px);
    }

    p 
    {
        text-align: center;
        font-size: 14px;
        opacity: 0.2;

        margin: 0;
    }

</style>
