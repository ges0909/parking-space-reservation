<script>
  import ParkingLot from './ParkingLot.svelte';

  export let rows = 1;
  export let cols = 1;
</script>

<div class="container">
  {#each Array(rows) as _, row}
    <div class="row">
      {#each Array(cols) as _, col}
        <div class="col mt-2 mb-2">
            <ParkingLot label="{row+1}.{col+1}"/>
        </div>
      {/each}
    </div>
  {/each}
</div>
