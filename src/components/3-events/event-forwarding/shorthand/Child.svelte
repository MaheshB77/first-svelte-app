<script lang="ts">
    import GrandChild from './GrandChild.svelte';
</script>

<div class="">
    <!-- Here we don't have to dispatch the event -->
    <!-- Also we don't have to forward the event like on:sendGreetings={sendGreetings}-->
    <GrandChild on:sendGreetings/>
</div>
