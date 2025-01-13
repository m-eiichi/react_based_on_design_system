/**
 * <Box/>プロパティ
 *
 * @property as　適用タグ名
 * @property width　幅 string
 * @property height　高さ string
 * @property maxWidth　最大幅
 * @property minWidth　最小幅
 * @property maxHeight　最大高さ
 * @property minHeight　最小高さ
 * @property padding　パディングの指定
 * @property overTbPadding　576px以上時のパディングの指定
 * @property overPcPadding　993px以上時のパディングの指定
 * @property border　ボーダーの有無
 * @property borderRadius　角丸の指定
 * @property overTbBorderRadius　576px以上時の角丸の指定
 * @property overPcBorderRadius　993px以上時の角丸の指定
 * @property shadow　影の有無
 * @property hoverShadow　マウスオーバー時の影の有無（変化の有無）
 * @property backgroundColor　背景色
 * @property transition
 * @property onClick クリック時イベント
 * @property children　子要素
 */

export type BoxProps = {
  as?: "div" | "section" | "article";
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  padding?: "xs" | "s" | "m" | "l" | "xl";
  overTbPadding?: "xs" | "s" | "m" | "l" | "xl";
  overPcPadding?: "xs" | "s" | "m" | "l" | "xl";
  border?: boolean;
  borderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  overTbBorderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  overPcBorderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  shadow?: boolean;
  hoverShadow?: boolean;
  backgroundColor?: "primary" | "secondary" | "tertiary";
  transition?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};
