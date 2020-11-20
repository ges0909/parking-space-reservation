<script>
  import { VERSION } from 'svelte/compiler';
  console.log(VERSION);

  let text = 'Svelte: ';
</script>

<div class="fixed-bottom">
	{ text } <span>{ VERSION }</span>
</div>
