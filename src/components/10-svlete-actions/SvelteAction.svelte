<script>
  let name = "Mahesh";

  function doAction(node, params) {
    console.log("Node :: ", node);
    console.log("Params :: ", params);

    return {
      // This method will get called when params changes
      update(updatedParam) {
        console.log("updatedParam :: ", updatedParam);
      },

      // This method will get called when node is getting destroyed from DOM
      destroy() {
        console.log("Node is getting destroyed");
      },
    };
  }
</script>

<div class="">
  <input type="text" bind:value={name} />
  <p use:doAction={name}>This is simple para</p>
  Name : {name}
</div>
