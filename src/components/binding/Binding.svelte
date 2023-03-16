<script lang="ts">
    let userName: string = "";

    // 1st way
    // const updateUserName = (event) => {
    //     userName = event.currentTarget.value;
    // }
</script>

<div class="">
    <!-- 1st way -->
    <!-- <input on:input={updateUserName} value={userName}> -->

    <!-- 2nd way -->
    <input bind:value={userName} />
    {userName}
</div>