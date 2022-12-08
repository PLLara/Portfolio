import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";



export function FullViewHeight({
  children, style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.fullViewHeight} style={style}>
      {children}
    </div>
  );
}
