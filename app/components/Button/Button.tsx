import classNames from "classnames";
import { nunitoSans } from "font/nunitoSans";

import {
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef
} from "react";

import styles from "./button.module.scss";

type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type Props = {
  children?: ReactNode;
  size?: "m" | "s" | "h" |"none";
  className?: string;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  size,
  className: propsClassName,
  ...props
}, ref) => {
  const buttonSize = classNames({
    [styles.sizeM]: size === "m",
    [styles.sizeS]: size === "s",
    [styles.sizeH]: size === "h",
    [styles.sizeNone]: size === "none"
  });

  const buttonClassName = classNames(
    styles.component,
    buttonSize,
    nunitoSans.className,
    propsClassName
  );

  return (
    <button
      className={buttonClassName}
      {...props}
      {...ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
