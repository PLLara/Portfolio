import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";



export function FullViewWidth({
  children, style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.FullViewWidth} style={style}>
      {children}
    </div>
  );
}
