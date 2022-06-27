import styles from "./WordInput.module.css";

export function WordInput() {
  return (
    <form className={styles.wrapper}>
      <input type="text" />
    </form>
  );
}
