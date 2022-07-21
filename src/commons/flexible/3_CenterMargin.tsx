import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function CMargin({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.cMargin}>
      {children}
    </div>
  );
}
