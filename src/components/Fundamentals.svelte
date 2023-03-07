<script lang="ts">
    let name: string = 'Mahesh';
    let headerColor: string = 'red';
    let showPara: boolean = false;
    let users: any[] = [
        {id: '1', name: "Mahesh"},
        {id: '2', name: "Aishwarya"},
        {id: '3', name: "Shubhangi"},
    ]
    const toggleHeaderColor = () => {
        headerColor = headerColor == 'red' ? 'blue' : 'red';
    };
    const togglePara = () => {
        showPara = !showPara;
    };
</script>

<div>
    <h1 style="color: {headerColor}">Svelte fundamentals</h1>

    <h3>Conditionals</h3>
    {#if showPara}
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            maxime!
        </p>
    {:else}
        <p>No Para</p>
    {/if}
    <button on:click={toggleHeaderColor}>Change header color</button>
    <button on:click={togglePara}>Toggle Para</button>
    <hr>

    <h3>Loops</h3>
    {#each users as user}
        <p>{user.id} : {user.name}</p>
    {/each}
    <hr>
</div>
