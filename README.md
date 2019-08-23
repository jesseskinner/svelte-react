# svelte-react

Use React components inside Svelte apps.

```html
<script>
	import ReactComponent from 'svelte-react';
	import Widget from './Widget.jsx';
</script>

<p>this is a React component inside a Svelte app:</p>
<ReactComponent this={Widget} {...props} />
```

## License

[MIT](LICENSE)
