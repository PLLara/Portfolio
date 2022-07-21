import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Relative({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.row} style={{ ...style, position: "relative" }}>
      {children}
    </div>
  );
}

export function Absolute({
  children,
  style,
  zIndex,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
  zIndex: number;
}) {
  return (
    <div
      className={styles.row}
      style={{
        ...style,
        position: "absolute",
        zIndex: zIndex,

      }}
    >
      {children}
    </div>
  );
}
