import styles from "./App.module.css";

import { Board } from "./components/Board";

import { ETeamId, TeamBar } from "./components/TeamBar";

function App() {
  return (
    <div className={styles.wrapper}>
      <TeamBar teamId={ETeamId.BLUE} />
      <Board />
      <TeamBar teamId={ETeamId.RED} />
    </div>
  );
}

export default App;
