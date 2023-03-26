<!-- We can pass events from parent to child as a prop -->
<script lang="ts">
  import ComponentEvents2 from "./ComponentEvents2.svelte";

  let counter = 0;

  const incrementCounter = () => {
    counter++;
  };
</script>

<div class="">
  <p>Counter :: {counter}</p>
  <!-- Possible way 1 -->
  <!-- <ComponentEvents2 incrementCounter={incrementCounter}/> -->

  <!-- Possible way 2 -->
  <ComponentEvents2 {incrementCounter} />
</div>
