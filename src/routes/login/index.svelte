<script>
  import { validate_component } from 'svelte/internal';

  let username = 'mark@oosterveld.org';
  let password = 'password';
  let error = '';

  async function validate(event) {
    event.preventDefault();
    error = '';

    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('password', password);

    console.log('before');
    const response = await fetch('/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    console.log('after');

    console.log(response.ok);
    console.log(response.status);

    const data = await response.json();

    console.log(data);

    if (data.code === 401) {
      error = data.message;
    } else if (data.code === 302) {
      window.location = data.location;
    }
  }
</script>

<head>
  <meta charset="utf-8" />
  <title>Login Form</title>
</head>

<div class="login-form">
  <h1>Login Form</h1>
  <form on:submit|preventDefault={validate}>
    <input type="text" name="username" placeholder="Username" bind:value={username} required />
    <input type="password" name="password" placeholder="Password" bind:value={password} required />
    <div>{error}</div>
    <input type="submit" />
  </form>
</div>

<!-- <a href="/cookie">Set Cookie</a> -->

<!-- https://codeshack.io/basic-login-system-nodejs-express-mysql/ -->
<style>
  .login-form {
    width: 300px;
    margin: 0 auto;
    font-family: Tahoma, Geneva, sans-serif;
  }
  .login-form h1 {
    text-align: center;
    color: #4d4d4d;
    font-size: 24px;
    padding: 20px 0 20px 0;
  }
  .login-form input[type='password'],
  .login-form input[type='text'] {
    width: 100%;
    padding: 15px;
    border: 1px solid #dddddd;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  .login-form input[type='submit'] {
    width: 100%;
    padding: 15px;
    background-color: #535b63;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
  }
</style>
