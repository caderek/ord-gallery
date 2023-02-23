import chunk from "@arrows/array/chunk_";

import { state, setState } from "./state";
import { getInscriptions } from "./io/api";
import fetchTXData from "./io/fetchTXData";
import readOrdinal from "./processing/readOrdinal";

import type { Query } from "./common-types";
import fetchFile from "./io/detchFile";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const previewTypes = new Set(["image", "text", "video"]);

const getText = async (data: Blob) => {
  const text = (await data.text()).replaceAll("\n", " ").trim();

  return text?.length <= 50 ? text : text.slice(0, 50) + "...";
};

const getURL = async (data: Blob) => {
  return URL.createObjectURL(data);
};

const getData = async (data: Blob, type: string) => {
  return type === "text" ? await getText(data) : await getURL(data);
};

const getRemoteData = async (hash: string, type: string) => {
  const tx = await fetchTXData(hash);

  if (tx === null) {
    return null;
  }

  let ord = readOrdinal(tx);

  if (!ord) {
    return null;
  }

  return await getData(ord.data, type);
};

const loadParallel = async (items: any) => {
  return Promise.all(
    [...items.entries()]
      .filter(([_, item]) => previewTypes.has(item.type))
      .map(async ([index, item]) => {
        const file = await fetchFile(item.hash, item.mime);

        const data = file
          ? await getData(file, item.type)
          : await getRemoteData(item.hash, item.type);

        if (data === null) {
          return;
        }

        setState("items", index, {
          ...state.items[index],
          data,
        });
      })
  );
};

const loadSequential = async (items: any) => {
  for (const [index, item] of items.entries()) {
    if (previewTypes.has(item.type)) {
      const tx = await fetchTXData(item.hash);
      let ord = readOrdinal(tx);

      if (!ord) {
        return;
      }

      const data =
        item.type === "text" ? await getText(ord.data) : await getURL(ord.data);

      setState("items", index, {
        ...state.items[index],
        data,
      });
    }
  }
};

const loadBatched = async (items: any, batchSize: number = 10) => {
  const chunks = chunk(batchSize, items);

  for (const [chunkIndex, items] of chunks.entries()) {
    const data = new Map(
      items.map((item, index) => [chunkIndex * batchSize + index, item])
    );

    await loadParallel(data);
  }
};

const load = async (query: Partial<Query>) => {
  const { data, search } = await getInscriptions(query);

  setState("items", data.items);
  setState("pages", data.page.of);

  window.location.hash = `inscriptions/${search}`;

  await loadBatched(data.items);
};

export default load;
