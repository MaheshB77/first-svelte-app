<script lang="ts">
  import { setContext } from "svelte";
  import ContextChild from "./ContextChild.svelte";
  setContext('color', 'red');

</script>

<div class="" style="border: 1px solid black;">
    <strong>Parent</strong>
    <ContextChild />
</div>