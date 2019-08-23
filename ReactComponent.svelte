<script>
  import * as React from "react";
  import * as ReactDOM from "react-dom";
  import { afterUpdate } from "svelte";

  let container;

  afterUpdate(render);

  async function render() {
    const children = $$props.children;
    const component = $$props.this;

    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.this;

    ReactDOM.render(React.createElement(component, props, children), container);
  }
</script>

<div bind:this={container} />
