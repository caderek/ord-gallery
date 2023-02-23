import type { Component } from "solid-js";

const CodeMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature code-miniature"
      style={{
        "--src": "url(/code-ico.svg)",
      }}
    ></li>
  );
};

export default CodeMiniature;
