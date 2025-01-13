import { ButtonProps } from "@/components/ui_elements/button/types";

/**
 * <DefaultDialogContent/>プロパティ
 *
 * @property title ダイアログタイトル
 * @property desc 内容
 * @property button01 ボタン1プロパティ
 * @property button02 ボタン2プロパティ(レイアウトカラーsecondory固定)
 */
export type DefaultDialogContentProps = {
  desc?: string;
  button01: ButtonProps;
  button02?: ButtonProps;
};
