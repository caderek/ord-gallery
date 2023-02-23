import type { Component } from "solid-js";

const BinaryMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature binary-miniature"
      style={{
        "--src": "url(/binary-ico.svg)",
      }}
    ></li>
  );
};

export default BinaryMiniature;
