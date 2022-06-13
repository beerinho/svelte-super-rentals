<script lang="ts" context="module">
	const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
	const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
</script>

<script lang="ts">
	export let lat: string;
	export let lng: string;
	export let height: string;
	export let width: string;
	export let zoom: string;
	export let alt = `Map image at coordinates ${lat},${lng}`;

	$: src = `${MAPBOX_API}/${lng},${lat},${zoom}/${width}x${height}@2x?access_token=${token}`;
</script>

<div class="map">
	<img {alt} {src} {width} {height} />
</div>
