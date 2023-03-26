<script lang="ts">
    import { empty } from 'svelte/internal';

    let colors: string[] = [];
</script>

<div class="">
    {#each colors as color}
        <ul>
            <li>{color}</li>
        </ul>

        <!-- This block will get executed when the list is empty -->
    {:else}
        <p>There are no colors</p>
    {/each}
</div>
