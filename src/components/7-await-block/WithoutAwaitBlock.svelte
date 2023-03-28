<script lang="ts">
    let selectedBreed;
    let imageSrc;
    let isLoading: boolean = false;
    let hasError: boolean = false;
    const breeds: string[] = ['husky', 'african', 'pitbull', 'hound'];

    async function fetchDogImage(breed: string) {
        try {
            isLoading = true;
            hasError = false;
            const responseBody = await getRandomDogImage(breed);
            imageSrc = responseBody.message;
        } catch (error) {
            hasError = true;
        } finally {
            isLoading = false;
        }
    }

    async function getRandomDogImage(breed: string) {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const responseBody = await response.json();
        return responseBody;
    }

    $: fetchDogImage(selectedBreed);
</script>

<div class="">
    <select bind:value={selectedBreed}>
        {#each breeds as breed}
            <option value={breed}>{breed}</option>
        {/each}
    </select>
    Selected breed : {selectedBreed}

    <hr />

    {#if hasError}
        Something went wrong
    {:else if isLoading}
        Loading
    {:else}
        <img src={imageSrc} alt="dog" width="auto" height="400" />
    {/if}
</div>
