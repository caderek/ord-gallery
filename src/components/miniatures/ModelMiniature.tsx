import type { Component } from "solid-js";

const ModelMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature 3d-miniature"
      style={{
        "--src": "url(/3d-ico.svg)",
      }}
    ></li>
  );
};

export default ModelMiniature;
