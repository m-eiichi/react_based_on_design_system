/**
 * <Headline/>プロパティ
 *
 * @property as 適用タグ名
 * @property size コンポーネントサイズ
 * @property color 文字色
 * @property marginNone True=マージンなし
 * @property children 子要素
 */
export type HeadlineProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "dt";
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
  color?: "primary" | "secondary" | "tertiary" | "black";
  marginNone?: boolean;
  children: React.ReactNode;
};
