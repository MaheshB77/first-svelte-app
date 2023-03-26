<script lang="ts">
  import BindThisChild from "./BindThisChild.svelte";
  let element;

  const parentIncrement = () => {
    element.increment();
  }
</script>

<div class="">
    <BindThisChild bind:this={element}/>
    <button on:click={parentIncrement}>Parent +</button>
</div>