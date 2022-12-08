import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "../../../styles/commons/commons.module.css";

export function Fieldset({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <fieldset className={styles.fieldset} style={style}>
      {children}
    </fieldset>
  );
}

export function Legend({
  children,
  style,
  properties,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
  properties?:
    | DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>
    | undefined
    | {
      align: "center" | "left" | "right";
    }
}) {
  return (
    <legend
      className={styles.fieldset}
      style={{ ...style, padding: "0 1rem" }}
      {...properties}
    >
      {children}
    </legend>
  );
}
