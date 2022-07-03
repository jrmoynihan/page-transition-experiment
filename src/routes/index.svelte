<script context="module">
	export const prerender = true;
</script>

<script>
	import {fade} from 'svelte/transition'
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="https://cdn.jsdelivr.net/gh/sveltejs/kit-template-default@00ead4b44cc05069932f99025ea1d8b02ab9483e/static/svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
	<a href='/motorcycle'>
	<img class="motorcycle" src="https://images.unsplash.com/photo-1656602881897-66dd9cea3930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="a motorcycle">
	</a>


	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	.motorcycle{
		contain: paint;
		page-transition-tag: motorcycle;
		max-width: 5rem;
		border-radius: 100%;
		aspect-ratio: 1 / 1;
	}
</style>
