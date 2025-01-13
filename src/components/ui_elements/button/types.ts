/**
 * <Button/>プロパティ
 *
 * @property disabled True=disabled
 * @property fullWidth True=width : 100%
 * @property type <button/>のtype属性
 * @property color レイアウトカラー
 * @property size ボタンのサイズ
 * @property onClick クリック時イベント
 * @property children 子要素
 */
export type ButtonProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "submit" | "button" | "reset";
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "s" | "m" | "l";
  onClick?: () => void;
  children: React.ReactNode;
};
