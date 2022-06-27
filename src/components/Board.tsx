import styles from "./Board.module.css";

import { Card, ECardColor, ICard, IWord } from "./Card";

const baseWords = [
  "Faca",
  "Maçã",
  "Pão",
  "Ovelha",
  "Faca",
  "Maçã",
  "Pão",
  "Ovelha",
  "Faca",
  "Maçã",
  "Pão",
  "Ovelha",
  "Faca",
  "Maçã",
  "Pão",
  "Ovelha",
  "Faca",
  "Maçã",
  "Pão",
  "Ovelha",
];

export function Board() {
  const cards: IWord[] = baseWords.map((word) => {
    const availableColors = [ECardColor.BLACK, ECardColor.BLUE, ECardColor.RED];

    return {
      word,
      color: ECardColor.GRAY,
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
