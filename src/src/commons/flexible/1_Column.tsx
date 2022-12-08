import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Column({
  children, style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.column} style={style}>
      {children}
    </div>
  );
}

export function CColumn({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div
      className={styles.column}
      style={{ ...style, alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </div>
  );
}
