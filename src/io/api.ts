import config from "../config";
import type { Query } from "../common-types";

const getInscriptions = async (options: Partial<Query>): Promise<any> => {
  const search = new URLSearchParams();

  if (options.page) {
    search.append("page", String(options.page));
  }

  if (options.limit) {
    search.append("limit", String(options.limit));
  }

  if (options.sort) {
    for (const item of options.sort) {
      search.append("sort", item);
    }
  }

  if (options.type) {
    search.append("type", String(options.type));
  }

  if (options.ext) {
    search.append("ext", String(options.ext));
  }

  if (options.date) {
    search.append("date", String(options.date));
  }

  if (options.block) {
    search.append("block", String(options.block));
  }

  if (options.censored) {
    search.append("censored", String(options.censored));
  }

  const url = new URL(`/inscriptions?${search}`, config.API_URL);

  const res = await fetch(url);
  const data = await res.json();

  return { data, search };
};

const getTypes = async (ext?: string) => {
  const url = new URL(`/types/${ext || "all"}`, config.API_URL);

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const getExtension = async (type?: string) => {
  const url = new URL(`/extensions/${type || "all"}`, config.API_URL);

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export { getInscriptions, getTypes, getExtension };
