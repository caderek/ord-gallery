import type { Component } from "solid-js";
import styles from "./App.module.css";
import Filters from "./components/Filters";

import InscriptionsList from "./components/InscriptionsList";
import Pagination from "./components/Pagination";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <h1>Inscriptions</h1>
        <Filters />
      </header>

      <main>
        <InscriptionsList />
      </main>

      <footer>
        <Pagination />
      </footer>
    </div>
  );
};

export default App;
