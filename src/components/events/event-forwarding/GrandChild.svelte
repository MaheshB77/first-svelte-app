<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const sendGreetings = () => {
        console.log("Greeting received to GrandChild");
        dispatch("sendGreetings");
    }
</script>
<div class="">
    <button on:click={sendGreetings}>Click from GrandChild</button>
</div>