import type { Component } from "solid-js";
import { Switch, Match, For } from "solid-js";
import { unwrap } from "solid-js/store";

import { state } from "../state";

import OtherMiniature from "./miniatures/OtherMiniature";
import ImageMiniature from "./miniatures/ImageMiniature";
import CodeMiniature from "./miniatures/CodeMiniature";
import TextMiniature from "./miniatures/TextMiniature";
import VideoMiniature from "./miniatures/VideoMiniature";
import AudioMiniature from "./miniatures/AudioMiniature";
import DataMiniature from "./miniatures/DataMiniature";
import PdfMiniature from "./miniatures/PdfMiniature";
import ArchiveMiniature from "./miniatures/ArchiveMiniature";
import ModelMiniature from "./miniatures/ModelMiniature";
import EbookMiniature from "./miniatures/EbookMiniature";
import BinaryMiniature from "./miniatures/BinaryMiniature";
import config from "../config";

const App: Component = () => {
  return (
    <ul class="inscriptions-list">
      <For each={state.items}>
        {(item) => (
          <a
            href={`${config.VIEWER_URL}/#${item.hash}`}
            onContextMenu={(e) => {
              e.preventDefault();
              console.log(unwrap(item).time);
              navigator.permissions
                // @ts-ignore
                .query({ name: "clipboard-write" })
                .then((result) => {
                  if (result.state === "granted" || result.state === "prompt") {
                    /* write to the clipboard now */
                    navigator.clipboard.writeText(`,\n'${item.hash}'`);
                  }
                });
            }}
          >
            <Switch fallback={<OtherMiniature />}>
              <Match when={item.type === "image"}>
                <ImageMiniature item={item} />
              </Match>
              <Match when={item.type === "code"}>
                <CodeMiniature item={item} />
              </Match>
              <Match when={item.type === "text"}>
                <TextMiniature item={item} />
              </Match>
              <Match when={item.type === "video"}>
                <VideoMiniature item={item} />
              </Match>
              <Match when={item.type === "audio"}>
                <AudioMiniature item={item} />
              </Match>
              <Match when={item.type === "pdf"}>
                <PdfMiniature item={item} />
              </Match>
              <Match when={item.type === "data"}>
                <DataMiniature item={item} />
              </Match>
              <Match when={item.type === "archive"}>
                <ArchiveMiniature item={item} />
              </Match>
              <Match when={item.type === "3d"}>
                <ModelMiniature item={item} />
              </Match>
              <Match when={item.type === "ebook"}>
                <EbookMiniature item={item} />
              </Match>
              <Match when={item.type === "binary"}>
                <BinaryMiniature item={item} />
              </Match>
            </Switch>
          </a>
        )}
      </For>
    </ul>
  );
};

export default App;
