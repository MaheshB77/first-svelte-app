<script lang="ts">
  import { store1 } from "./store";

  let value1;
</script>

<div class="">
  <!-- Without store contract -->
  <!-- <input type="text" on:input={(e) => (value1 = e.currentTarget.value)} /> <br>
  <button
    on:click={() => {
      store1.set(value1);
    }}
  >
    Update store 1 value
  </button> -->

  <!-- With store contract -->
  <input type="text" on:input={(e) => (value1 = e.currentTarget.value)} />
  <br />
  <button
    on:click={() => {
      $store1 = value1;
    }}
  >
    Update store 1 value
  </button>
</div>
