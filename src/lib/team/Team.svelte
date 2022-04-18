<script>
  import { createEventDispatcher } from 'svelte';

  const dispatchEvent = createEventDispatcher();

  export let firstPlayer = 'First Player';
  export let secondPlayer = 'Second Player';

  export let edit = false;
</script>

<div class="border-4 bg-cyan-50">
  {#if edit}
    <div class="border-2">
      <input type="text" value={firstPlayer} />
    </div>

    <div class="border-2">
      <input type="text" value={secondPlayer} />
    </div>

    <button on:click={() => dispatchEvent('cancel', {})} class="border-2">Cancel</button>
    <button on:click={() => dispatchEvent('save', {})} class="border-2">Save</button>
  {/if}
  {#if !edit}
    <div class="border-2">
      {firstPlayer}
    </div>

    <div class="border-2">
      {secondPlayer}
    </div>

    <button on:click={() => dispatchEvent('edit', {})} class="border-2">Edit</button>
    <button on:click={() => dispatchEvent('delete', {})} class="border-2">Delete</button>
  {/if}
</div>
