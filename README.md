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

`ReactComponent` does not accept any children or slots. If you want to specify children to the React component, you have to pass them in through the `children` prop.

## Resources

This project was heavily inspired by [react-svelte](https://github.com/Rich-Harris/react-svelte). If you want to use Svelte components inside React apps, have a look at [react-svelte](https://github.com/Rich-Harris/react-svelte).

## License

[MIT](LICENSE)
