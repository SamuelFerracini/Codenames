import styles from "./App.module.css";

import { Board } from "./components/Board";

import { ETeamId, TeamBar } from "./components/TeamBar";
import { TurnMessage } from "./components/TurnMessage";
import { WordInput } from "./components/WordInput";

function App() {
  return (
    <div className={styles.layout}>
      <TeamBar teamId={ETeamId.BLUE} />

      <div className={styles.wrapper}>
        <TurnMessage />
        <Board />
        <WordInput />
      </div>

      <TeamBar teamId={ETeamId.RED} />
    </div>
  );
}

export default App;
