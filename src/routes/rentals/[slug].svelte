<script type="ts" context="module">
	import type { Rental } from 'src/models/rental.model';
	import Jumbo from '../../components/jumbo.svelte';
	import RentalImage from '../../components/rental/image.svelte';
	import Map from '../../components/map.svelte';

	const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

	export async function load({ params, fetch }: { params: { slug: string }; fetch: Function }) {
		let response = await fetch(`/api/rentals/${params.slug}.json`);

		if (response.status > 400) {
			return Error(response.statusText);
		}
		let { data } = await response.json();

		let { id, attributes } = data;
		let type;

		if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
			type = 'Community';
		} else {
			type = 'Standalone';
		}

		return { props: { rental: { id, type, ...attributes } } };
	}
</script>

<script type="ts">
	export let rental: Rental;
</script>

<Jumbo>
	<h2>{rental.title}</h2>
	<p>Nice find! This looks like a nice place to stay near {rental.city}.</p>
	<a
		href="https://twitter.com"
		target="_blank"
		rel="external nofollow noopener noreferrer"
		class="share button"
	>
		Share on Twitter
	</a>
</Jumbo>

<article class="rental detailed">
	<RentalImage src={rental.image} alt="A picture of {rental.title}" />

	<div class="details">
		<h3>About {rental.title}</h3>

		<div class="detail owner">
			<span>Owner:</span>
			{rental.owner}
		</div>
		<div class="detail type">
			<span>Type:</span>
			{rental.type} – {rental.category}
		</div>
		<div class="detail location">
			<span>Location:</span>
			{rental.city}
		</div>
		<div class="detail bedrooms">
			<span>Number of bedrooms:</span>
			{rental.bedrooms}
		</div>
		<div class="detail description">
			<p>{rental.description}</p>
		</div>
	</div>

	<Map
		lat={rental.location.lat}
		lng={rental.location.lng}
		zoom="12"
		width="894"
		height="600"
		alt="A map of {rental.title}"
		styleClass="large"
	/>
</article>
