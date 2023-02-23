import type { Component } from "solid-js";

const EbookMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      class="miniature ebook-miniature"
      style={{
        "--src": "url(/ebook-ico.svg)",
      }}
    ></li>
  );
};

export default EbookMiniature;
