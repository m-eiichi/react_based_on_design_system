import { type ReactElement } from "react";
import { ContainerProps } from "./types.ts";
import Styles from "./container.module.css";

/**
 * <Container/>コンポーネント
 *
 * @description　コンテナコンポーネント
 * @param {ContainerProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */

export const Container = ({
  as: As = "div",
  gutter = undefined,
  overTbGutter = undefined,
  overPcGutter = undefined,
  paddingVertical = undefined,
  overTbPaddingVertical = undefined,
  overPcPaddingVertical = undefined,
  fixed = false,
  maxWidth,
  children,
}: ContainerProps): ReactElement => {
  const className = [
    Styles.container,
    //gutter が "xs", "s", "m", "l", "xl"のいずれかの場合
    gutter &&
      ["xs", "s", "m", "l", "xl"].includes(gutter) &&
      Styles[`gutter_${gutter}`],

    overTbGutter && Styles[`overTbGutter_${overTbGutter}`],
    overPcGutter && Styles[`overPcGutter_${overPcGutter}`],
    //paddingVertical が "xs", "s", "m", "l", "xl"のいずれかの場合
    paddingVertical &&
      ["xs", "s", "m", "l", "xl"].includes(paddingVertical) &&
      Styles[`paddingVertical_${paddingVertical}`],

    overTbPaddingVertical &&
      Styles[`overTbPaddingVertical_${overTbPaddingVertical}`],
    overPcPaddingVertical &&
      Styles[`overPcPaddingVertical_${overPcPaddingVertical}`],
    !fixed ? Styles.width_full : Styles.width_auto,
    //maxWidth が "xs", "s", "m", "l", "xl"のいずれかの場合
    maxWidth &&
      ["xs", "s", "m", "l", "xl"].includes(maxWidth) &&
      (fixed ? Styles[`width_${maxWidth}`] : Styles[`maxWidth_${maxWidth}`]),
  ]

    .filter(Boolean)
    .join(" ");

  const dynamicStyle: {
    width?: string;
    maxWidth?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
  } = {};

  // 関数で条件を整理
  const isCustomSize = (value: unknown): value is string =>
    typeof value === "string" && !["xs", "s", "m", "l", "xl"].includes(value);

  // width / maxWidth の設定
  if (fixed && isCustomSize(maxWidth)) {
    dynamicStyle.width = maxWidth;
  } else if (!fixed && isCustomSize(maxWidth)) {
    dynamicStyle.maxWidth = maxWidth;
  }

  // paddingLeft / paddingRight の設定
  if (isCustomSize(gutter)) {
    dynamicStyle.paddingLeft = gutter;
    dynamicStyle.paddingRight = gutter;
  }

  // paddingTop / paddingBottom の設定
  if (isCustomSize(paddingVertical)) {
    dynamicStyle.paddingTop = paddingVertical;
    dynamicStyle.paddingBottom = paddingVertical;
  }

  return (
    <As className={className} style={dynamicStyle}>
      {children}
    </As>
  );
};
