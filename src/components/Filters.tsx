import { For, createSignal } from "solid-js";
import type { Component } from "solid-js";
import { state, setState } from "../state";
import styles from "./Filters.module.css";
import { getExtension, getTypes } from "../io/api";

const Filters: Component = () => {
  const [types, setTypes] = createSignal(["all"]);
  const [extensions, setExtensions] = createSignal(["all"]);

  const updateTypes = () =>
    getTypes(state.query.ext).then((data) => setTypes(["all", ...data]));

  const updateExtensions = () =>
    getExtension(state.query.type).then((data) =>
      setExtensions(["all", ...data.sort()])
    );

  updateTypes();
  updateExtensions();

  const today = new Date().toISOString().slice(0, 10);

  const setType = (e: Event) => {
    if (e.target) {
      const target = e.target as HTMLSelectElement;
      const type = target.value === "all" ? undefined : target.value;

      setState("query", {
        ...state.query,
        type,
        page: type !== state.query.type ? 1 : state.query.page,
      });

      updateExtensions();
    }
  };

  const setExtension = (e: Event) => {
    if (e.target) {
      const target = e.target as HTMLSelectElement;
      const ext = target.value === "all" ? undefined : target.value;

      setState("query", {
        ...state.query,
        ext,
        page: ext !== state.query.ext ? 1 : state.query.page,
      });

      updateTypes();
    }
  };

  const setDate = (e: Event) => {
    if (e.target) {
      const target = e.target as HTMLInputElement;
      const date = target.value;

      setState("query", {
        ...state.query,
        date,
        page: date !== state.query.date ? 1 : state.query.page,
      });
    }
  };

  const setBlock = (e: Event) => {
    if (e.target) {
      const target = e.target as HTMLInputElement;
      const block = target.valueAsNumber;

      setState("query", {
        ...state.query,
        block,
        page: block !== state.query.block ? 1 : state.query.page,
      });
    }
  };

  const clearFilters = () => {
    setState("query", {
      ...state.query,
      page: 1,
      type: undefined,
      ext: undefined,
      date: undefined,
      block: undefined,
    });
  };

  return (
    <nav class={styles.Filters}>
      <fieldset>
        <label>
          Type:
          <select name="types" onChange={setType}>
            <For each={types()}>
              {(item) => (
                <option value={item} selected={state.query.type === item}>
                  {item}
                </option>
              )}
            </For>
          </select>
        </label>

        <label>
          Extension:
          <select name="extensions" onChange={setExtension}>
            <For each={extensions()}>
              {(item) => (
                <option value={item} selected={state.query.ext === item}>
                  {item}
                </option>
              )}
            </For>
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            onChange={setDate}
            value={state.query.date}
            min="2022-12-14"
            max={today}
          />
        </label>
        <label>
          Block:
          <input
            type="number"
            name="block"
            placeholder="number"
            min={0}
            onChange={setBlock}
            value={state.query.block}
          />
        </label>
        <button onClick={clearFilters}>CLEAR FILTERS</button>
      </fieldset>
    </nav>
  );
};

export default Filters;
