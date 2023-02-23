import type { Component } from "solid-js";
import { Show } from "solid-js";

const CodeMiniature: Component<{ item: any }> = (props) => {
  return (
    <li
      classList={{
        miniature: true,
        "video-miniature": true,
        censored: props.item.censored,
      }}
      style={{
        "--src": props.item.data ? "none" : "url(/video-ico.svg)",
      }}
    >
      <Show when={props.item.data}>
        <video
          src={props.item.data}
          loop
          muted
          onMouseEnter={(e) => {
            const target = e.target as HTMLVideoElement;
            if (target?.play) {
              target.play();
            }
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLVideoElement;
            if (target?.pause) {
              target.pause();
            }
          }}
        ></video>
      </Show>
    </li>
  );
};

export default CodeMiniature;
