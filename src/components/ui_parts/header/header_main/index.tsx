import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./header_main.module.css";

export const HeaderMain = (): ReactElement => {
  return (
    <>
      <figure className={Styles.logo}>
        <Link to="/">
          <img src="https://placehold.jp/150x50.png" alt="" />
        </Link>
      </figure>
      <div className={Styles.content}>
        <nav className={Styles.nav}>
          <ul role="list">
            <li>
              <Link to="/sub-page1">sub page 1</Link>
            </li>
            <li>
              <Link to="/sub-page2">sub page 2</Link>
            </li>
          </ul>
        </nav>
        <div className={Styles.button__container}></div>
      </div>
    </>
  );
};
