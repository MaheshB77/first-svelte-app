<script lang="ts">
    export let count;
    
    // 1st Way (not using props binding)
    // import { createEventDispatcher } from "svelte"
    // const dispatch = createEventDispatcher();
    // $: dispatch("increment", count)
</script>

<div class="">
    <button on:click={() => count++}>Increment</button>
</div>