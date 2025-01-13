import { type ReactElement } from "react";
import { HeaderMain } from "@/components/ui_parts/header/header_main";
import { Burger } from "@/components/ui_parts/header/burger";

import Styles from "./header.module.css";

export const Header = (): ReactElement => {
  return (
    <header className={Styles.header}>
      <Burger />
      <HeaderMain />
    </header>
  );
};
