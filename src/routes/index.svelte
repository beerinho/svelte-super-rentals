<script context="module" type="ts">
	import type { Rental as RentalModel } from '../models/rental.model';

	import Jumbo from '../components/jumbo.svelte';
	import Rental from '../components/rental/index.svelte';

	const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

	export async function load({ fetch }: { fetch: Function }) {
		let response = await fetch('/api/rentals.json');
		let { data } = await response.json();

		let rentals = data.map((rental: { attributes: RentalModel; type: string; id: string }) => {
			let { id, attributes } = rental;
			let type = 'Community';

			if (!COMMUNITY_CATEGORIES.includes(attributes.category)) {
				type = 'Standalone';
			}

			// attributes as {} is used here to prevent a typescript error "'type' is specified more than once, so this usage will be overwritten."
			return { id, type, ...(attributes as {}) };
		});

		return {
			props: { rentals }
		};
	}
</script>

<script type="ts">
	export let rentals: RentalModel[];
</script>

<Jumbo>
	<h2>Welcome to Super Rentals!</h2>
	<p>We hope you find exactly what you're looking for in a place to stay.</p>
	<a href="/about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
	<ul class="results">
		{#each rentals as rental}
			<li><Rental {rental} /></li>
		{/each}
	</ul>
</div>
