import { createStore } from "solid-js/store";
import type { Query } from "./common-types";

type State = {
  query: Query;
  pages: number;
  items: any[];
};

const getQueryFromSearchParams = () => {
  const queryString = location.hash.replace("#inscriptions/", "");
  const search = new URLSearchParams(queryString);

  const query: Partial<Query> = Object.fromEntries(search.entries());
  query.sort = search.getAll("sort");
  query.page = Number(search.get("page") ?? 1);

  const sort = search.getAll("sort");
  const page = search.get("page");
  const block = search.get("block");

  return {
    ...query,
    ...(sort.length > 0 ? { sort } : {}),
    ...(page ? { page: Number(page) } : {}),
    ...(block ? { block: Number(block) } : {}),
  };
};

const initialState: State = {
  query: { page: 1, limit: 105, ...getQueryFromSearchParams() },
  pages: 1,
  items: [],
};

console.log(initialState);

const [state, setState] = createStore(initialState);

export { state, setState };
