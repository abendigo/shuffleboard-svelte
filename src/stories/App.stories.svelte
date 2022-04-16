<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Index from "../routes/index.svelte";
</script>

<Meta
  title="Index/Page"
  component={Index}
  />

<Template let:args>
  <Index />
</Template>

<Story
  name="LoggedIn"
  args={{
    user: {},
  }}
/>

