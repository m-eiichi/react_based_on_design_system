import { type ReactElement } from "react";
import { FlexContainerProps } from "./types";
import Styles from "./flex_container.module.css";

// モバイルクラス名生成関数
const generateFlexClass = ({
  direction = "row",
  wrap = "nowrap",
  alignContent = "normal",
  justifyContent = "normal",
  alignItems = "normal",
  gap,
  containerType = "normal",
}: Partial<FlexContainerProps>): string => {
  const classes = [
    Styles.flex,
    Styles[`flex_${direction}`],
    Styles[wrap === "wrap" ? "flex_wrap" : "flex_nowrap"],
    alignContent !== "normal" && Styles[`align_content_${alignContent}`],
    justifyContent !== "normal" && Styles[`justify_content_${justifyContent}`],
    alignItems !== "normal" && Styles[`align_items_${alignItems}`],
    gap && ["xs", "s", "m", "l", "xl"].includes(gap) && Styles[`gap_${gap}`],
    containerType === "inline-size"
      ? Styles.containerType_inline_size
      : Styles.containerType_normal,
  ];

  return classes.filter(Boolean).join(" ");
};

// PC向けのクラス名生成
const generatePcFlexClass = ({
  direction,
  wrap,
  alignContent,
  justifyContent,
  alignItems,
  gap,
}: Partial<FlexContainerProps>): string => {
  const classes = [
    direction && Styles[`pc_flex_${direction}`],
    wrap && Styles[wrap === "wrap" ? "pc_flex_wrap" : "pc_flex_nowrap"],
    alignContent && Styles[`pc_align_content_${alignContent}`],
    justifyContent && Styles[`pc_justify_content_${justifyContent}`],
    alignItems && Styles[`pc_align_items_${alignItems}`],
    gap && Styles[`pc_gap_${gap}`],
  ];

  return classes.filter(Boolean).join(" ");
};

/**
 * <FlexContainer/>コンポーネント
 *
 * @description フレックスコンポーネント
 * @param {FlexContainerProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const FlexContainer = ({
  direction = "row",
  wrap = "nowrap",
  alignContent = "normal",
  justifyContent = "normal",
  alignItems = "normal",
  gap,
  pcDirection,
  pcWrap,
  pcAlignContent,
  pcJustifyContent,
  pcAlignItems,
  pcGap,
  containerType,
  children,
}: FlexContainerProps): ReactElement => {
  // クラス名結合
  const className = [
    generateFlexClass({
      direction,
      wrap,
      alignContent,
      justifyContent,
      alignItems,
      gap,
      containerType,
    }),
    generatePcFlexClass({
      direction: pcDirection,
      wrap: pcWrap,
      alignContent: pcAlignContent,
      justifyContent: pcJustifyContent,
      alignItems: pcAlignItems,
      gap: pcGap,
    }),
  ]
    .filter(Boolean)
    .join(" ");

  const flexGap = () => {
    if (gap && !["xs", "s", "m", "l", "xl"].includes(gap)) {
      return { gap: gap };
    }
  };
  return (
    <div style={flexGap()} className={className}>
      {children}
    </div>
  );
};
