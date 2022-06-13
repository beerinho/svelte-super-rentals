<script lang="ts">
	export let src: string;
	export let alt: string;

	let isLarge = false;

	function onToggleSize() {
		isLarge = !isLarge;
	}
</script>

{#if isLarge}
	<button on:click={onToggleSize} class="image large">
		<img {src} {alt} />
		<small>View Smaller</small>
	</button>
{:else}
	<button on:click={onToggleSize} class="image">
		<img {src} {alt} />
		<small>View Larger</small>
	</button>
{/if}
