<script lang="ts">

    import { onMount } from "svelte";
    import { HexToRgb, rgbToHsv } from "./pageFuncs";

    let ColourName: string | undefined = "Cool Blue!"

    onMount(async () => {
        let colourDisplay = document.querySelector("#ColourDisplay") as HTMLDivElement;
        let colour = "#40b6ce";
        colourDisplay.style.backgroundColor = colour;

        let colourPicker = document.querySelector("#newColourPicker") as HTMLInputElement;
        colourPicker.value = colour;
        setValues(colour);
        ColourName = await fetchColourName(colour);

        colourPicker.addEventListener("input", () => {
            colour = colourPicker.value;
            colourDisplay.style.backgroundColor = colour;
            setValues(colour);
        });

        // when the colour picker is closed
        colourPicker.addEventListener("change", async () => {
            await fetchColourName(colour);
        });

    });

    function setValues(hex: string)
    {
        let colourHex = document.querySelector("#ColourHex") as HTMLInputElement;
        let colourRGB = document.querySelector("#ColourRGB") as HTMLInputElement;
        let colourHSV = document.querySelector("#ColourHSV") as HTMLInputElement;

        colourHex.value = hex;

        let rgb = HexToRgb(hex);
        colourRGB.value = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;

        let hsv = rgbToHsv(rgb[0], rgb[1], rgb[2]);
        colourHSV.value = `${Math.round(hsv[0]!*360)}, ${Math.round(hsv[1]!*100)}, ${Math.round(hsv[2]!*100)}`;
    
        // fetch the colour name
        //fetchColourName(hex);
    
    }

    function openColourPicker() {
        let colourPicker = document.querySelector("#newColourPicker") as HTMLInputElement;
        colourPicker.click();
    }

    async function fetchColourName(hex: string) {
        console.log("fetching colour name for", hex);

        // get name element
        let nameElement = document.querySelector("#NameElement") as HTMLHeadingElement;

        // set its colour to the colour we're fetching the name for
        nameElement.style.color = hex;

        return undefined;
    }

</script>

<main>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="ColourPicker">
        <h1>Explore!</h1>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div id="ColourDisplay" on:click={openColourPicker}>
            <p class="white">Click me!</p>
            <input type="color" id="newColourPicker" style="">
        </div>

        <hr>

        <div id="ColourName">
            <p>this colour is
                {#if ColourName === undefined}
                    unnamed!
                {:else}
                    called
                {/if}
            </p>
            {#if ColourName !== undefined}
                <h2 id="NameElement">{ColourName}</h2>
            {:else}
                <button>Name it!</button>
            {/if}
        </div>

        <hr>

        <div id="ColourValues">
            <p>Hex</p>
            <input type="text" value="#40b6ce" id="ColourHex" readonly>
            <p>RGB</p>
            <input type="text" value="64, 182, 206" id="ColourRGB" readonly>
            <p>HSV</p>
            <input type="text" value="192, 69, 81" id="ColourHSV" readonly>
        </div>


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

    h1
    {
        margin: 0px;
        text-align: center;
    }

    #ColourDisplay
    {
        margin: auto;
        margin-top: 5px;
        margin-bottom: 10px;
        width: 200px;
        height: 40px;
        background: #9b3939;
        border-radius: 15px;
        border: solid 1px #000000;

        display: flex;
        align-items: center;
        flex-direction: column;

        overflow: hidden;
    }

    #ColourValues
    {
        width: 142px;
        margin: auto;
    }

    #ColourName
    {
        text-align: center;
        height: 70px;
    }

    #NameElement
    {
        -webkit-text-stroke-width: .01px;
        -webkit-text-stroke-color: black;
        height: 40px;
    }

    p, h2
    {
        margin: auto;
    }

    .white
    {
        color: white;
        margin-top: 10px;
    }

    input[type="color"]
    {
        opacity: 0;
        margin: auto;
    }

    input[type="text"]
    {
        width: 100px;
        margin: auto;
        margin-top: 2px;
        margin-bottom: 2px;

        text-align: center;
    }

</style>