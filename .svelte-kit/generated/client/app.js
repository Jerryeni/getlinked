export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [];

export const dictionary = {
		"/(landing)": [8,[3]],
		"/(auth)/forgotpassword": [4,[2]],
		"/(auth)/forgotpassword/resetpassword": [5,[2]],
		"/(auth)/login": [~6,[2]],
		"/(auth)/register": [~7,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';