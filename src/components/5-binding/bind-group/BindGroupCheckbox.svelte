<script lang="ts">
    let options = [];
</script>

<div class="">
    <label>
        <input type="checkbox" name="foo" value="1" bind:group={options} > 1
    </label>
    <label>
        <input type="checkbox" name="foo" value="2" bind:group={options} > 2
    </label>
    <label>
        <input type="checkbox" name="foo" value="3" bind:group={options} > 3
    </label>
    <label>
        <input type="checkbox" name="foo" value="4" bind:group={options} > 4
    </label>

    <h3>Selected options are {options.join(", ")}</h3>

    <button on:click={() => options = []}>Clear all</button>
</div>