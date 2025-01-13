import { ReactNode } from "react";

/**
 * <Dialog/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property noOverlay True=背景をグレーアウトに着色
 * @property isOpen True=ダイアログ表示
 * @property children 子要素
 */
export type DialogProps = {
  size?: "s" | "m" | "l";
  noOverlay?: boolean;
  isOpen?: boolean;
  title?: string;
  children?: ReactNode;
};
