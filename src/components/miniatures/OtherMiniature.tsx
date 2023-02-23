import type { Component } from "solid-js";

const OtherMiniature: Component = () => {
  return (
    <li
      class="miniature other-miniature"
      style={{
        "--src": "url(/other-ico.svg)",
      }}
    ></li>
  );
};

export default OtherMiniature;
