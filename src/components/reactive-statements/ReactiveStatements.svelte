<script lang="ts">
    let counter: number = 0;
    const updateCounter = () => {
        counter ++;
    }

    $: {
        console.log("Counter changed ! ", counter);
    }
</script>

<div class="">
    <p>Counter :: {counter}</p>
    <button on:click={updateCounter}>+</button>
</div>

<style>

</style>