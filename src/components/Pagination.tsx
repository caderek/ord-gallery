import type { Component } from "solid-js";
import { prev, next, first, last, goto } from "../actions/pagination";
import { state } from "../state";
import styles from "./Pagination.module.css";

const Pagination: Component = () => {
  return (
    <nav class={styles.Pagination}>
      <fieldset>
        <button onClick={first}>FIRST</button>
        <button onClick={prev}>PREV</button>
        <input
          type="number"
          name="page"
          value={state.query.page ?? 1}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            goto(target.valueAsNumber);
          }}
        />
        <span>of {state.pages}</span>
        <button onClick={next}>NEXT</button>
        <button onClick={last}>LAST</button>
      </fieldset>
    </nav>
  );
};

export default Pagination;
