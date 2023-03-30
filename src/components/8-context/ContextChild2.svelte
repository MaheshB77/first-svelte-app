<script lang="ts">
  import { setContext } from "svelte";
  import ContextGrandChild1 from "./ContextGrandChild1.svelte";

  setContext('color', 'blue');
</script>

<div class="">
    <ContextGrandChild1 />
</div>