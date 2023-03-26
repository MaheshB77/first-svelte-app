<script lang="ts">
    let colors: string[] = ['red', 'green', 'blue'];
</script>

<div class="">
    <!-- (color) is the unique key to identify the element -->
    <!-- This key is useful for svelte to identify the elements -->
    {#each colors as color (color)}
        <ul>
            <li>{color}</li>
        </ul>
    {/each}
</div>
