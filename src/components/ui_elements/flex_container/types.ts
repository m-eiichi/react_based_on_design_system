import { ReactNode } from "react";

/**
 * <FlexContainer/>プロパティ
 *
 * @property direction css.flex-directionプロパティ
 * @property wrap css.flex-wrapプロパティ
 * @property alignContent css.align-contentプロパティ
 * @property justifyContent css.justify-contentプロパティ
 * @property alignItems css.align-itemsプロパティ
 * @property gap css.gapプロパティ
 * @property pcDirection (PCサイズ版)direction
 * @property pcWrap (PCサイズ版)wrap
 * @property pcAlignContent (PCサイズ版)alignContent
 * @property pcJustifyContent (PCサイズ版)justifyContent
 * @property pcAlignItems (PCサイズ版)alignItems
 * @property pcGap (PCサイズ版)gap
 * @property children 子要素
 */
export type FlexContainerProps = {
  direction?: "row" | "column" | "rReverse" | "cReverse";
  wrap?: "nowrap" | "wrap";
  alignContent?:
    | "center"
    | "start"
    | "end"
    | "around"
    | "between"
    | "stretch"
    | "normal";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "normal";
  alignItems?: "center" | "start" | "end" | "stretch" | "baseline" | "normal";
  gap?: "xs" | "s" | "m" | "l" | "xl" | string;

  pcDirection?: "row" | "column" | "rReverse" | "cReverse";
  pcWrap?: "nowrap" | "wrap";
  pcAlignContent?:
    | "center"
    | "start"
    | "end"
    | "around"
    | "between"
    | "stretch"
    | "normal";
  pcJustifyContent?:
    | "center"
    | "start"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "normal";
  pcAlignItems?: "center" | "start" | "end" | "stretch" | "baseline" | "normal";
  pcGap?: "xs" | "s" | "m" | "l" | "xl";
  containerType?: "normal" | "inline-size";
  children?: ReactNode;
};
