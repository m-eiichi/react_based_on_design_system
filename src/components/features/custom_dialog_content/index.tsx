import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./custom_dialog_content.module.css";

export const CustomDialogContent = (): ReactElement => {
  return (
    <div className={Styles.inner}>
      <Headline size="s" marginNone>
        Custom Dialog
      </Headline>
      <p>
        Custom Dialog Custom Dialog Custom Dialog Custom Dialog Custom Dialog
        Custom Dialog Custom Dialog Custom Dialog Custom Dialog Custom Dialog
      </p>
    </div>
  );
};
