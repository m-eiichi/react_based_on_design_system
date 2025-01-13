import { useState, type ReactElement, useCallback } from "react";
import { BurgerButton } from "@/components/ui_parts/header/burger/burger_button";
import { BurgerMenu } from "@/components/ui_parts/header/burger/burger_menu";

export const Burger = (): ReactElement => {
  const [state, setState] = useState(false);

  const openClose = useCallback(() => {
    setState(!state);
  }, [state]);

  return (
    <>
      <BurgerButton state={state} onClick={openClose} />
      <BurgerMenu state={state} onClick={openClose} />
    </>
  );
};
