import { afterNavigate, beforeNavigate } from '$app/navigation';
import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

export const preparePageTransition = () => {
	const transitionStore = writable({});
	let unsub;
	let isReducedMotionEnabled = false;

	function updateStore(key, value) {
		transitionStore.update((current) => ({
			...current,
			[key]: value
		}));
	}

	// before navigating, start a new transition
	beforeNavigate(({ to }) => {
		unsub?.(); // clean up previous subscription

		// Feature detection
		if (!document.createDocumentTransition || isReducedMotionEnabled) {
			console.log('page transitions not supported');
			return;
		}
		console.log('page transitions are supported');

		const transitionKey = to.pathname;
		const transition = document.createDocumentTransition();
		transition.start(async () => {
			// set transition data for afterNavigate hook to pick up
			await new Promise((resolver) => {
				updateStore(transitionKey, { transition, resolver });
			});
			updateStore(transitionKey, null);
		});
	});

	afterNavigate(({ to }) => {
		const transitionKey = to.pathname;
		// we need to subscribe to prevent race conditions
		// sometimes this runs before the store is updated with the new transition
		unsub = transitionStore.subscribe((transitions) => {
			const transition = transitions[transitionKey];
			if (!transition) {
				return;
			}
			const { resolver } = transition;
			resolver();
		});
	});

	onDestroy(() => {
		unsub?.();
	});
};
