import svelte from 'rollup-plugin-svelte';

export default {
	input: './ReactComponent.svelte',
	output: {
		file: 'dist/ReactComponent.js',
		format: 'umd',
		name: 'ReactComponent',
	},
	plugins: [svelte()],
};
