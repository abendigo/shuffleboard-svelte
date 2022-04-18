<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Team from './Team.svelte';
</script>

<Meta title="Shuffleboard/Team" component={Team} />

<Story name="Primary">
  <Team />
</Story>

<Story name="Edit">
  <Team edit />
</Story>
