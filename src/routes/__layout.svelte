<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { preparePageTransition } from '$lib/page-transition';
	preparePageTransition();
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		/* Identify that the header should be isolated from the larger page transition (possibly with its own transition) */
		page-transition-tag: footer;
  /* Paint containment is required */
  	contain: paint;
	}
	::page-transition-outgoing-image(footer){
		/* transform: translateY(-100px); */
		animation-duration: 1000ms;
	}
	::page-transition-incoming-image(footer){
		/* transform: translateY(100px); */
		animation-duration: 1000ms;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
