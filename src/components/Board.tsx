import styles from "./Board.module.css";

import _ from "lodash";

import { Card, ECardColor, IWord } from "./Card";

import wordlist from "../resource/wordlist.json";

const baseWords = _.sampleSize(wordlist, 25);

export function Board() {
  const cards: IWord[] = baseWords.map((word) => {
    const availableColors = [ECardColor.BLACK, ECardColor.BLUE, ECardColor.RED];

    return {
      word,
      teamColor:
        availableColors[Math.floor(Math.random() * availableColors.length)],
    };
  });

  return (
    <div className={styles.board}>
      {cards.map((word, wordIndex) => (
        <Card key={wordIndex} word={word} />
      ))}
    </div>
  );
}
