import type { Component } from "solid-js";
import { Show } from "solid-js";

const CodeMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature text-miniature"
      style={{
        "--src": "url(/text-ico.svg)",
      }}
    >
      <Show when={props.item.data !== undefined}>
        <pre>{props.item.data}</pre>
      </Show>
    </li>
  );
};

export default CodeMiniature;
