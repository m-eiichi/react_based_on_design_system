import { type ReactElement } from "react";

import Styles from "./burger_button.module.css";

export const BurgerButton = (props: any): ReactElement => {
  return (
    <button className={`${Styles.burger} ${props.state === true ? Styles.isOpen : ""}`} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
