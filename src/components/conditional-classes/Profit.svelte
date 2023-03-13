<script lang="ts">
  let profit = 0;
</script>

<div class={profit > 0 ? "positive" : "negative"}>
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
