<script lang="ts">
  import Component from "./Component.svelte";
</script>

<div class="">
  <!-- If we want to insert some elements into component the we can make use of slot -->
  <Component>
    <p>This is the component I want to insert in the component</p>
  </Component>
</div>
