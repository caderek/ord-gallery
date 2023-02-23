import type { Component } from "solid-js";

const PdfMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature pdf-miniature"
      style={{
        "--src": "url(/pdf-ico.svg)",
      }}
    ></li>
  );
};

export default PdfMiniature;
