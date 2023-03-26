<script lang="ts">
    let element;
    const reset = () => {
        element.value = ''
    }
</script>

<div class="">
    <input type="text" bind:this={element} />
    <br>
    <button on:click={reset}>Reset</button>
</div>