<script lang="ts">
  import { onMount } from "svelte";
  import { isLoggedIn, user } from "./store";
  let _userLoggedIn: boolean = false;
  let email: string = "";
  let password: string = "";
  onMount(() => {
    isLoggedIn.subscribe((userLoggedIn) => {
      _userLoggedIn = userLoggedIn;
    });
    user.subscribe((user) => {
      if (user) {
        email = user.email;
        password = user.password;
      }
    });
  });
</script>

<div class="" style="border: 2px solid black; margin-top: 2px">
  <strong>User Card</strong>
  {#if _userLoggedIn}
    <p>User is logged in</p>
    <p>User email : {email}</p>
    <p>User password : {password}</p>
  {:else}
    User <strong>not</strong> logged in
  {/if}
</div>
