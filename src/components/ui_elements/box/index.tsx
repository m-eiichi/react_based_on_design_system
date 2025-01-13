import { type ReactElement } from "react";

import { BoxProps } from "./types";
import Styles from "./box.module.css";

/**
 * <Box/>コンポーネント
 *
 * @description ボックスコンポーネント
 * @param {BoxProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Box = ({
  as: As = "div",
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  padding,
  overTbPadding,
  overPcPadding,
  border = false,
  borderRadius,
  overTbBorderRadius,
  overPcBorderRadius,
  shadow = false,
  hoverShadow = false,
  backgroundColor = "primary",
  transition = true,
  children,
  onClick,
}: BoxProps): ReactElement => {
  const className = [
    Styles.box,

    width === "auto" || !width
      ? Styles.width_auto
      : width === "full" && Styles.width_full,
    height === "auto" || !height
      ? Styles.height_auto
      : height === "full" && Styles.height_full,
    padding && Styles[`padding_${padding}`],
    overTbPadding && Styles[`over_tb_padding_${overTbPadding}`],
    overPcPadding && Styles[`over_pc_padding_${overPcPadding}`],
    border && Styles.border,
    borderRadius && Styles[`border_radius_${borderRadius}`],
    overTbBorderRadius && Styles[`over_tb_border_radius_${overTbBorderRadius}`],
    overPcBorderRadius && Styles[`over_pc_border_radius_${overPcBorderRadius}`],
    shadow && Styles.shadow,
    hoverShadow && Styles.hover_shadow,
    transition && Styles.transition,
    Styles[`bg_${backgroundColor}`],
    onClick && Styles.cursorPointer,
  ]
    .filter(Boolean)
    .join(" ");

  // width が "full" や "auto" の場合はクラス名で処理し、それ以外の文字列（"100px" など）の場合はスタイルで指定
  const widthValue =
    width !== "full" && width !== "auto" && width ? width : undefined;

  // height が "full" や "auto" の場合はクラス名で処理し、それ以外の文字列（"100px" など）の場合はスタイルで指定
  const heightValue =
    height !== "full" && height !== "auto" && height ? height : undefined;

  const dynamicStyle = {
    width: widthValue,
    height: heightValue,
    maxWidth: maxWidth,
    minWidth: minWidth,
    maxHeight: maxHeight,
    minHeight: minHeight,
  };

  return (
    <As className={className} style={dynamicStyle} onClick={onClick}>
      {children}
    </As>
  );
};
