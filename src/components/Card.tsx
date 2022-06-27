import { useState } from "react";
import styles from "./Card.module.css";

export enum ECardColor {
  BLACK,
  RED,
  BLUE,
  GRAY,
}

export interface IWord {
  teamColor: ECardColor;
  word: string;
}

export interface ICard {
  word: IWord;
}

export function Card({ word }: ICard) {
  const [clicked, setClicked] = useState(false);

  const getCardColor = (color?: ECardColor) => {
    switch (color) {
      case ECardColor.BLUE:
        return styles.wrapperBlue;

      case ECardColor.RED:
        return styles.wrapperRed;

      case ECardColor.BLACK:
        return styles.wrapperBlack;
    }
  };

  return (
    <div
      onClick={() => setClicked(true)}
      className={`${styles.wrapper} ${clicked && styles.disabled} ${
        !clicked ? styles.wrapperGray : getCardColor(word.teamColor)
      }`}
    >
      <h3>{word.word}</h3>
    </div>
  );
}
