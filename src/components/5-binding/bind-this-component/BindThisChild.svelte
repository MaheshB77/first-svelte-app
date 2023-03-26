<script lang="ts">
    let count: number= 0;
    export const increment = () => {
        count++;
    }
</script>

<div class="">
    {count}
    <br>
    <button on:click={increment}>Child +</button>
</div>