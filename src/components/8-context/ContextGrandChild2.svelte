<script lang="ts">
  import { getContext } from "svelte";

  let color = getContext("color");
</script>

<div class="">
  <strong>ContextGrandChild2</strong>, color: {color}
</div>
