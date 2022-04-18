<script>
  import Team from '../lib/team/Team.svelte';

  let teams = [
    {
      firstPlayer: 'First Player',
      secondPlayer: 'Second Player'
    },
    {
      firstPlayer: 'Third Player',
      secondPlayer: 'Fourth Player'
    }
  ];

  function handleAddTeam() {
    teams = [...teams, { firstPlayer: 'foo', secondPlayer: 'bar' }];
  }

  function handleRemoveTeam() {
    teams = teams.slice(1);
  }
</script>

{#each teams as team}
  <Team {...team} />
{/each}
<button on:click={handleAddTeam}>Add New Team</button>
<button on:click={handleRemoveTeam}>Remove Team</button>
