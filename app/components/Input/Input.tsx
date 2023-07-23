import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import { FunctionComponent } from "react";
import { RegisterOptions, useController } from "react-hook-form";

import styles from "./input.module.scss";

type TProps = {
  name: string;
  placeholder: string;
  control?: any;
  rules?: RegisterOptions;
  containerClassName?: string;
  error?: string;
  className?: string;
};

export const Input: FunctionComponent<TProps> = ({
  name,
  placeholder,
  control,
  rules,
  className: propsClassName,
  containerClassName,
  error,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control, rules });

  const inputStyles = fieldState.error ? styles.inputError : styles.container;
  const inputClassName = classNames(styles.component, propsClassName, sanFrancisco.className);

  return (
    <div className={containerClassName}>
      <input
        className={classNames(inputStyles, inputClassName)}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  );
};
