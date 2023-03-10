<script lang="ts">
    import Child from './Child.svelte';
    const handleOnClick = () => {
        console.log('Handled on click in Parent');
    };
    const sendGreetings = () => {
        console.log("Greeting received to Parent");
    }
</script>

<div class="">
    <!-- On native html elements events are automatically bubbled to parent ex. below -->
    <div class="" on:click={handleOnClick}>
        <button>Click button</button>
    </div>
    <br>

    <!-- In Svelte elements events are "NOT" automatically bubbled to parent -->
    <!-- We have to dispatch the event all the way to parent -->
    <Child on:sendGreetings={sendGreetings}/>
</div>
