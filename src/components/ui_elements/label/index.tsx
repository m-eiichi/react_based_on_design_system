import { type ReactElement } from "react";

import { LabelProps } from "./types";
import Styles from "./label.module.css";

/**
 * <Label/>コンポーネント
 *
 * @description <label/>要素の最小コンポーネント
 * @param {LabelProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Label = ({
  labelFor,
  text,
  requirement,
  disabled,
}: LabelProps): ReactElement => {
  const label = [Styles.label, disabled === true ? Styles.disabled : ""];
  return (
    <>
      {(text !== undefined || (!disabled && requirement)) && (
        <label className={label.join(" ")} htmlFor={labelFor}>
          {text && <span className={Styles.label_text}>{text}</span>}
          {requirement && !disabled && (
            <span className={Styles.requirement}>※</span>
          )}
        </label>
      )}
    </>
  );
};
