import { type ReactElement } from "react";
import { HeadlineProps } from "./types";
import Styles from "./headline.module.css";

/**
 * <Headline/>コンポーネント
 *
 * @description 文字修飾コンポーネント
 * @param {HeadlineProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Headline = ({
  as: As = "p",
  size = "m",
  color = "black",
  marginNone = false,
  children,
}: HeadlineProps): ReactElement => {
  const className = [
    Styles.headline,
    Styles[size],
    Styles[color],
    marginNone && Styles.margin_none,
  ]
    .filter(Boolean) // falseや空文字列を除去
    .join(" ");

  return <As className={className}>{children}</As>;
};
