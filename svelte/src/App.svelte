<script>
	import ParkingGarage from './ParkingGarage.svelte';
	import Version from './Version.svelte';

	import levels from './data/levels.json';
</script>

<main>
	<ParkingGarage {levels} />
	<Version />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
