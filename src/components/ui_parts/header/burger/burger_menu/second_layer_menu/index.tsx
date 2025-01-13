import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./second_layer_menu.module.css";

export const SecondLayerMenu = (props: any): ReactElement => {
  return (
    <div className={Styles.menu__second__layer}>
      <ul
        className={`${props.active === 1 ? Styles.isActive : ""}`}
        data-menu-id="1"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="style-rules/colors">colors</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="style-rules/spaces">spaces</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="style-rules/images">images</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 2 ? Styles.isActive : ""}`}
        data-menu-id="2"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="ui-elements/button">button</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-elements/headline">headline</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-elements/input-element">input element</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 3 ? Styles.isActive : ""}`}
        data-menu-id="3"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="ui-parts/modal-dialog">modal dialog</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-parts/table">table</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-parts/edit">edit</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 4 ? Styles.isActive : ""}`}
        data-menu-id="4"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="project/react_table">react table</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="project/react_table_swr">react table swr</Link>
        </li>
      </ul>
    </div>
  );
};
