import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Row({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.row} style={style}>
      {children}
    </div>
  );
}

export function CRow({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div
      className={styles.row}
      style={{ ...style, alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </div>
  );
}
