import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";

import { ComponentOutlineProps, ComponentProps } from "./types";
import Styles from "./component_outline.module.css";

export const ComponentOutline = ({
  code,
  propsItems,
  description,
}: ComponentOutlineProps): ReactElement => {
  return (
    <dl className={Styles.dl}>
      <div className={Styles.code_block}>
        <Headline as="dt" size="xxs">
          Sample Code
        </Headline>
        <dd>{code ? code : "--"}</dd>
      </div>
      <div className={Styles.props_block}>
        <Headline as="dt" size="xxs">
          Props
        </Headline>
        {propsItems
          ? propsItems.map((item: ComponentProps) => {
              return <dd key={item.id}>{item.componentProps}</dd>;
            })
          : ""}
      </div>
      <div className={Styles.desc__block}>
        <Headline as="dt" size="xxs">
          Description
        </Headline>
        <dd>{description ? description : "--"}</dd>
      </div>
    </dl>
  );
};
