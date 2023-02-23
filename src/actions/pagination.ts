import { state, setState } from "../state";

export const next = () => {
  if (state.query.page < state.pages) {
    setState("query", "page", state.query.page + 1);
  }
};

export const prev = () => {
  if (state.query.page > 1) {
    setState("query", "page", state.query.page - 1);
  }
};

export const first = () => {
  if (state.query.page !== 1) {
    setState("query", "page", 1);
  }
};

export const last = () => {
  if (state.query.page !== state.pages) {
    setState("query", "page", state.pages);
  }
};

export const goto = (page: number) => {
  if (page > 0 && page <= state.pages) {
    setState("query", "page", page);
  }
};
