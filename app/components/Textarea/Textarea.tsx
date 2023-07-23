import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import { FunctionComponent } from "react";
import { RegisterOptions, useController } from "react-hook-form";

import styles from './textarea.module.scss';

type TProps = {
  name:string;
  placeholder?: string;
  control?: any;
  rules?: RegisterOptions;
  containerClassName?: string;
  className?: string;
  value?: string;
};

export const Textarea: FunctionComponent<TProps> = ({
  name,
  placeholder,
  control,
  rules,
  containerClassName,
  className: propsClassName,
  value: propsValue,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control, rules });

  const textareaStyles = fieldState.error ? styles.textareaError : styles.container;
  const textareaClassName = classNames(styles.component, propsClassName, sanFrancisco.className);
  const wrapperClassName = classNames(styles.container, containerClassName);

  return (
    <div className={wrapperClassName}>
      <textarea
        className={classNames(textareaClassName, textareaStyles)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
