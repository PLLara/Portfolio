import { CSSProperties } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Flex({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div className={styles.flex} style={style}>
      {children}
    </div>
  );
}

