export type ComponentProps = {
  id: string | number;
  componentProps: string;
};

export type ComponentOutlineProps = {
  code?: string;
  propsItems: ComponentProps[];
  description?: string;
};
