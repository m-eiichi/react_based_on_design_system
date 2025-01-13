export type TypographyProps = {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  color?:
    | "success"
    | "error"
    | "info"
    | "warning"
    | "description"
    | "link"
    | "textPrimary"
    | "textSecondary"
    | "textDisabled";
  size?:
    | "body"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2";
  align?: "left" | "center" | "right";
  margin?: "both" | "bottom" | "none";
  weight?: "bold" | "normal";
  onClick?: () => void;
  children: React.ReactNode;
};
