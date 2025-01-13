/**
 * <Container/>プロパティ
 *
 * @property as　適用タグ名
 * @property gutter　左右のパディング
 * @property overTbGutter　タブレットサイズ以上の左右のパディング
 * @property overPcGutter　PCサイズ以上の左右のパディング
 * @property paddingVertical　上下のパディング
 * @property overTbPaddingVertical　タブレットサイズ以上の上下のパディング
 * @property overPcPaddingVertical　PCサイズ以上の上下のパディング
 * @property fixed　幅の固定の指定
 * @property maxWidth　コンポーネントの幅または最大幅
 * @property children　子要素
 */

export type ContainerProps = {
  as?: "div" | "section" | "article";
  gutter?: string;
  overTbGutter?: "xs" | "s" | "m" | "l" | "xl";
  overPcGutter?: "xs" | "s" | "m" | "l" | "xl";
  paddingVertical?: "xs" | "s" | "m" | "l" | "xl" | string;
  overTbPaddingVertical?: "xs" | "s" | "m" | "l" | "xl";
  overPcPaddingVertical?: "xs" | "s" | "m" | "l" | "xl";
  fixed?: boolean;
  maxWidth?: string;
  children?: React.ReactNode;
};
