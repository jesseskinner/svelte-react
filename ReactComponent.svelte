<script>
  import { createElement } from "react";
  import { render } from "react-dom";
  import { afterUpdate } from "svelte";

  let container;

  afterUpdate(() => {
    const children = $$props.children;
    const component = $$props.this;

    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.this;

    render(createElement(component, props, children), container);
  });
</script>

<div bind:this={container} />
