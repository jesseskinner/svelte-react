<script>
  import React from "react";
  import ReactDOM from "react-dom";
  import { afterUpdate } from "svelte";

  export let children;
  export let component;

  let root;

  afterUpdate(render);

  async function render() {
    const props = Object.assign({}, $$props);
    delete props.children;
    delete props.component;

    ReactDOM.render(React.createElement(component, props, children), root);
  }
</script>

<span bind:this={root} />
