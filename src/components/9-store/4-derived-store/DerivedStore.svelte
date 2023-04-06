<!-- We can create new store using existing store with the help of derived() -->

<script lang="ts">
  import { derived, writable } from "svelte/store";

  const num = writable(0);
  const newStore = derived(num, (oldStoreValue) => {
    return oldStoreValue * 2;
  })
</script>

<div class="">
  <input
    type="number"
    on:input={(e) => ($num = Number(e.currentTarget.value))}
  /> <br>
  Original store value = {$num}
  <br>
  New store value = {$newStore}
</div>
