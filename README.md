# svelte-react

Use React components inside Svelte apps.

```html
<script>
	import ReactComponent from 'svelte-react';
	import Widget from './Widget.jsx';
</script>

<p>this is a React component inside a Svelte app:</p>
<ReactComponent this={Widget} children="child text" {...props} />
```

## Limitations

`ReactComponent` does not take any children. If you want to specify children, you'll need to pass them in through the children prop. If you want to pass in HTML children, you could either use `React.createElement` or create a React component to do this.

## License

[MIT](LICENSE)
