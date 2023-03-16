<script lang="ts">
    let option;
</script>

<div class="">
    <label>
        <input type="radio" name="foo" value="1" bind:group={option} > 1
    </label>
    <label>
        <input type="radio" name="foo" value="2" bind:group={option} > 2
    </label>
    <label>
        <input type="radio" name="foo" value="3" bind:group={option} > 3
    </label>
    <label>
        <input type="radio" name="foo" value="4" bind:group={option} > 4
    </label>

    <h3>Selected option is {option}</h3>
</div>