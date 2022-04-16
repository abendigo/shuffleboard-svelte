<script>
  // import { Greeter } from "$lib/greeter/index";
  import { Greeter } from "../lib/greeter/index"

  let xxx = new Greeter().sayHello();
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Marko was here: {xxx}</p>
