<script lang="ts">
  import { getContext } from "svelte";

  let color = getContext("color");
</script>

<div class="">
  <strong style="color: {color};">ContextGrandChild1</strong>
</div>
