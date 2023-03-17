<script lang="ts">
  //   import Profit from "./components/conditional-classes/Profit.svelte";
  import BindGroupCheckbox from "./components/binding/bind-group/BindGroupCheckbox.svelte";
  import BindGroupRadio from "./components/binding/bind-group/BindGroupRadio.svelte";
  import BindThisParent from "./components/binding/bind-this-component/BindThisParent.svelte";
  import BindThis from "./components/binding/bind-this/BindThis.svelte";
  import Binding from "./components/binding/Binding.svelte";
  import PropsBindingParent from "./components/binding/props-binding/PropsBindingParent.svelte";
  import Profit from "./components/conditional-classes/shorthand/Profit.svelte";
  import ComponentEvents from "./components/events/ComponentEvents.svelte";
  // import Parent from "./components/events/event-forwarding/Parent.svelte";
  import Parent from "./components/events/event-forwarding/shorthand/Parent.svelte"; // Event forwarding shorthand
  import EventDispatcher from "./components/events/EventDispatcher.svelte";
  import Fundamentals from "./components/fundamentals/Fundamentals.svelte";
  import ReactiveStatements from "./components/reactive-statements/ReactiveStatements.svelte";
</script>

<!-- <Fundamentals/> -->
<!-- <ReactiveStatements/> -->

<!-- Events -->
<!-- <ComponentEvents /> -->
<!-- <EventDispatcher /> -->

<!-- Event forwarding -->
<!-- <Parent /> -->

<!-- Event forwarding shorthand -->
<!-- <Parent/> -->

<!-- Conditional classes -->
<!-- <Profit /> -->

<!-- Conditional classes shorthand-->
<!-- <Profit /> -->

<!-- Binding -->
<!-- <Binding /> -->

<!-- Props Binding -->
<!-- <PropsBindingParent /> -->

<!-- Group binding (radio) -->
<!-- <BindGroupRadio /> -->

<!-- Group binding (checkbox) -->
<!-- <BindGroupCheckbox /> -->

<!-- Bind this (any HTML element)-->
<!-- <BindThis /> -->

<!-- Bind this (Component) -->
<BindThisParent />