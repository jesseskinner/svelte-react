<script>
  import * as React from "react";
  import * as ReactDOM from "react-dom";
  import { afterUpdate, onDestroy } from "svelte";

  let container;

  afterUpdate(() => {
    const children = typeof $$props.children === 'string' ? $$props.children : React.createElement($$props.children);
    const component = $$props.this;

    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.this;

    ReactDOM.render(React.createElement(component, props, children), container);
  });

  onDestroy(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
</script>

<div bind:this={container} />
