import type { Component } from "solid-js";

const CodeMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature audio-miniature"
      style={{
        "--src": "url(/audio-ico.svg)",
      }}
    ></li>
  );
};

export default CodeMiniature;
