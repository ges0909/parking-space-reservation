<script>
  export let label = '';

  let reserverd = false;

  function toogle() {
    reserverd = !reserverd;
  }
</script>

<div class="card">
  <div class="card-body">
    <p class="card-title">Stellplatz {label}</p>
    {#if reserverd}
      <button type="button" class="btn btn-danger" on:click={toogle}>Freigeben</button>
    {:else}
      <button type="button" class="btn btn-primary" on:click={toogle}>Reservieren</button>
    {/if}
  </div>
</div>
