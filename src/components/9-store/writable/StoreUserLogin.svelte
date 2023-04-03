<script lang="ts">
  import { isLoggedIn, user } from "./store";
  let email: string = "";
  let password: string = "";

  function doLogin() {
    isLoggedIn.set(true);
    user.set({
      email: email,
      password: password,
      isLoggedIn: true,
    });
  }
  
  function doLogout() {
    isLoggedIn.set(false);
  }
</script>

<div class="" style="border: 2px solid black;">
  <strong>User Login</strong><br />

  <label for="">Email</label>
  <input type="text" bind:value={email} /> <br />
  <label for="">Password</label>
  <input type="password" bind:value={password} /> <br />
  <button on:click={doLogin}>Login</button>
  <button on:click={doLogout}>Logout</button>
</div>
