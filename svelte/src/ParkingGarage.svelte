<script>
  import ParkingLevel from './ParkingLevel.svelte'; 

  export let levels = {}
  let selected_level = 0;
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light">
  <a class="navbar-brand" href="https://www.syrocon.de/" target="_blank">
    <img src="./img/parking.svg" width="30" height="30" alt="">
    Parkplatzreservierung
  </a>
  <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarMenu">
    <ul class="navbar-nav">
      {#each levels as level, index}
        <li class="nav-item" class:active="{selected_level == index}">
          <a class="nav-link" on:click="{() => selected_level = index}" href="#">{level.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<div class="tab-content" id="level-tab-content">
  {#each levels as level, index}
    <div class="tab-pane fade" class:show="{selected_level == index}" class:active="{selected_level == index}" role="tabpanel">
      <ParkingLevel rows={level.rows} cols={level.cols} />
    </div>
  {/each}
</div>
