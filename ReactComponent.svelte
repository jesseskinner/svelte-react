<script>
  import { createElement } from "react";
  import { render, unmountComponentAtNode } from "react-dom";
  import { afterUpdate, onDestroy } from "svelte";

  let container;

  afterUpdate(() => {
    const children = $$props.children;
    const component = $$props.this;

    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.this;

    render(createElement(component, props, children), container);
  });

  onDestroy(() => {
    unmountComponentAtNode(container);
  });
</script>

<div bind:this={container} />
