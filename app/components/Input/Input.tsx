import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import { FunctionComponent } from "react";

import styles from "./input.module.scss";

type TProps = {
  name: string;
  placeholder: string;
  control?: any;
  containerClassName?: string;
  error?: string;
  className?: string;
};

export const Input: FunctionComponent<TProps> = ({
  name,
  placeholder,
  control,
  className: propsClassName,
  containerClassName,
  error,
  ...props
}) => {

  const inputClassName = classNames(styles.component, propsClassName, sanFrancisco.className);

  return (
    <div className={containerClassName}>
      <span className={styles.placeholderActive}>
        {placeholder}
      </span>
      <input
        className={inputClassName}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
