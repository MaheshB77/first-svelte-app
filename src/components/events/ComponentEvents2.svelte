<script lang="ts">
  export let incrementCounter; // Creating prop

  const increase = () => {
    incrementCounter(); // Calling the function which is passed by parent
  };
</script>

<div class="">
  <button on:click={increase}>Increment counter</button>
</div>
