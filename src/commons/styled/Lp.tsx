import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Lp({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <p className={styles.lp} style={style}>
      {children}
    </p>
  );
}

