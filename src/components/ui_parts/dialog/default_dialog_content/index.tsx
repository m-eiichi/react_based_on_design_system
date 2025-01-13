import { type ReactElement } from "react";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { Button } from "@/components/ui_elements/button";

import { DefaultDialogContentProps } from "./types";
import Styles from "./default_dialog_content.module.css";

/**
 * <DefaultDialogContent/>コンポーネント
 *
 * @description 子要素なし（文字表示のみ）のダイアログ
 * @param {ModalDialogProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const DefaultDialogContent = ({
  desc,
  button01,
  button02,
}: DefaultDialogContentProps): ReactElement => {
  return (
    // TODO .innerのFlexContainer対応
    <FlexContainer direction="column" gap="l" containerType="inline-size">
      <p>{desc}</p>
      <div className={Styles.button_container}>
        <Button fullWidth onClick={button01.onClick}>
          {button01.children}
        </Button>
        {button02 && (
          <Button color="secondary" fullWidth onClick={button02.onClick}>
            {button02.children}
          </Button>
        )}
      </div>
    </FlexContainer>
  );
};
