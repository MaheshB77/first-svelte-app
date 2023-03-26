<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const callUpdateName = () => {
        dispatch("updateName", "Mahesh");
    }
</script>

<div class="">
    <button on:click={callUpdateName}>Update Name</button>
</div>