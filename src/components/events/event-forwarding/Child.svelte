<script lang="ts">
    import GrandChild from './GrandChild.svelte';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const sendGreetings = () => {
        console.log("Greeting received to Child");
        dispatch("sendGreetings");
    }
</script>

<div class="">
    <GrandChild on:sendGreetings={sendGreetings}/>
</div>
