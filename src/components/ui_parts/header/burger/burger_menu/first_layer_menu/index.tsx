import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./first_layer_menu.module.css";

export const FirstLayerMenu = (props: any): ReactElement => {
  return (
    <div className={Styles.menu__first__layer}>
      <ul className={Styles.menu__first__layer__top} role="list">
        <li>
          <Link to="/" onClick={props.onClick}>
            home
          </Link>
        </li>
        <li>
          <p
            data-menu-id="1"
            onMouseOver={props.handleMouseOver}
            onMouseLeave={props.handleMouseLeave}
          >
            style rules
          </p>
        </li>
        <li>
          <p
            data-menu-id="2"
            onMouseOver={props.handleMouseOver}
            onMouseLeave={props.handleMouseLeave}
          >
            ui elements
          </p>
        </li>
        <li>
          <p
            data-menu-id="3"
            onMouseOver={props.handleMouseOver}
            onMouseLeave={props.handleMouseLeave}
          >
            ui parts
          </p>
        </li>
        <li>
          <p
            data-menu-id="4"
            onMouseOver={props.handleMouseOver}
            onMouseLeave={props.handleMouseLeave}
          >
            features
          </p>
        </li>
      </ul>
      <ul className={Styles.menu__first__layer__bottom} role="list">
        <li>
          <p>sub page 3</p>
        </li>
        <li>
          <p>sub page 4</p>
        </li>
      </ul>
    </div>
  );
};
