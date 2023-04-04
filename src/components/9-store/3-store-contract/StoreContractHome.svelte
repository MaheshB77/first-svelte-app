<script lang="ts">
  import { onMount } from "svelte";
  import { store1, store2 } from "./store";
  import StoreContractChild from "./StoreContractChild.svelte";

//   Without store contract
//   let value1;
//   let value2;
//   onMount(() => {
//     store1.subscribe((_value) => {
//       {
//         value1 = _value;
//       }
//     });
//   });

//   onMount(() => {
//     store2.subscribe((_value) => {
//       {
//         value2 = _value;
//       }
//     });
//   });
</script>

<div class="">
  <!-- Without store contract -->
  <!-- <h1>Store 1 : {value1}</h1>
  <h1>Store 2 : {value2}</h1> -->
  
  <!-- With store contract -->
  <h1>Store 1 : {$store1}</h1>
  <h1>Store 2 : {$store2}</h1>

  <StoreContractChild />
</div>
