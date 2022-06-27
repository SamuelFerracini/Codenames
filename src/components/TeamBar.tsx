import styles from "./TeamBar.module.css";

export enum ETeamId {
  BLUE,
  RED,
}

export interface ITeamBar {
  teamId: ETeamId;
}

export function TeamBar({ teamId }: ITeamBar) {
  const getTeamColor = (teamId: ETeamId) => {
    switch (teamId) {
      case ETeamId.BLUE:
        return styles.blueTeam;

      case ETeamId.RED:
        return styles.redTeam;

      default:
        throw new Error("Unrecognized team");
    }
  };

  return (
    <div className={`${styles.wrapper} ${getTeamColor(teamId)}`}>
      <h1>0</h1>
    </div>
  );
}
