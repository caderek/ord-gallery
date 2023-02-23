import type { Component } from "solid-js";

const DataMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature data-miniature"
      style={{
        "--src": "url(/data-ico.svg)",
      }}
    ></li>
  );
};

export default DataMiniature;
