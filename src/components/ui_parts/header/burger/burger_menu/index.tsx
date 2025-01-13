import { useState, useCallback, type ReactElement } from "react";

import { FirstLayerMenu } from "@/components/ui_parts/header/burger/burger_menu/first_layer_menu";
import { SecondLayerMenu } from "@/components/ui_parts/header/burger/burger_menu/second_layer_menu";

import Styles from "./burger_menu.module.css";

interface BurgerMenuPropsType {
  state: boolean;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const BurgerMenu = (props: BurgerMenuPropsType): ReactElement => {
  const [active, setActive] = useState<number | "">("");

  const handleMouseOver = useCallback(
    (e: any): void => {
      const id = e.currentTarget.getAttribute("data-menu-id");
      setActive(Number(id));
    },
    [active]
  );

  const handleMouseLeave = useCallback((): void => {
    setActive("");
  }, [active]);

  return (
    <nav className={`${Styles.menu} ${props.state ? Styles.isOpen : ""}`}>
      <FirstLayerMenu
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        onClick={props.onClick}
      />
      <SecondLayerMenu
        active={active}
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        onClick={props.onClick}
      />
    </nav>
  );
};
