import type { Component } from "solid-js";

const getSize = (src: string) => {
  const img = new Image();
  img.src = src;
  return Math.min(img.naturalWidth, img.naturalHeight);
};

const ImageMiniature: Component<{ item: any }> = (props) => {
  const size = getSize(props.item.data);

  return (
    <li
      classList={{
        miniature: true,
        "image-miniature": true,
        pixelated: size < 112,
        censored: props.item.censored,
      }}
      style={{
        "--src": props.item.data
          ? `url(${props.item.data})`
          : "url(/image-ico.svg)",
      }}
    ></li>
  );
};

export default ImageMiniature;
