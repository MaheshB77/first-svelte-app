<script lang="ts">
    import EventDispatcher2 from "./EventDispatcher2.svelte";

    let name: string = "";

    const updateName = (event) => {
        console.log("Update name called !", event);
        name = event.detail;
    }
</script>

<div class="">
    <p>Hello {name}</p>
    <EventDispatcher2 on:updateName={updateName}/>
</div>