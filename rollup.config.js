import svelte from 'rollup-plugin-svelte';

export default {
	input: './ReactComponent.svelte',
	output: [
		{
			file: 'dist/ReactComponent.esm.js',
			format: 'esm',
		},
		{
			file: 'dist/ReactComponent.cjs.js',
			format: 'cjs',
		},
	],
	plugins: [svelte()],
};
