<script lang="ts">
  import PropsBindingChild from "./PropsBindingChild.svelte";

  let count = 0;
</script>

<div class="">
  <!-- 1st Way (not using props binding) -->
  <!-- <PropsBindingChild {count} on:increment={(e) => (count = e.detail)} /> -->

  <!-- 2nd way (using props binding) -->
  <PropsBindingChild bind:count />
  {count}
  <br />
  <button on:click={() => (count = 99)}>Click me</button>
</div>
