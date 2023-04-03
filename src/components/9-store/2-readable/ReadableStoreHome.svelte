<script lang="ts">
  import { onMount } from "svelte";
import { message } from "./readableStore";

    let msg: string = '';

    onMount(() => {
        message.subscribe((_msg) => {
            msg = _msg
        })
    })
</script>

<div class="">
    <h2>Readable store home</h2>
    <p>Message : {msg}</p>
</div>