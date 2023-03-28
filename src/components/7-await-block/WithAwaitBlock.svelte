<script lang="ts">
    let selectedBreed;
    const breeds: string[] = ['husky', 'african', 'pitbull', 'hound'];

    async function getRandomDogImage(breed: string) {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const responseBody = await response.json();
        return responseBody;
    }
</script>

<div class="">
    <select bind:value={selectedBreed}>
        {#each breeds as breed}
            <option value={breed}>{breed}</option>
        {/each}
    </select>
    Selected breed : {selectedBreed}
    <hr />

    {#await getRandomDogImage(selectedBreed)}
        Loading....
    {:then responseBody}
        <img src={responseBody.message} alt="dog" width="auto" height="400" />
    {:catch}
        Something went wrong
    {/await}
</div>
