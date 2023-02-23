import type { Component } from "solid-js";

const ArchiveMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature archive-miniature"
      style={{
        "--src": "url(/archive-ico.svg)",
      }}
    ></li>
  );
};

export default ArchiveMiniature;
