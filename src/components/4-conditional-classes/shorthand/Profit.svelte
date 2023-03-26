<script lang="ts">
  let profit = 0;

  $: negative = profit < 0;
  $: positive = profit > 0;
</script>

<!-- 
  -- 1st way
  class:positive={profit > 0} 
  class:negative={profit < 0} 

  -- 2nd way
  class:positive
  class:negative

  -- For 2nd way to work we have to define reactive statements like line number 4 and 5

-->
<div class:positive class:negative>
  <p>{profit}</p>
  <button on:click={() => profit++}>+</button>
  <button on:click={() => profit--}>-</button>
</div>

<style>
  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
</style>
