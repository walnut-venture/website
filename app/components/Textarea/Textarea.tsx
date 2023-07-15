import classNames from "classnames";
import { sanFrancisco } from "font/sanFrancisco";
import { FunctionComponent } from "react";

import styles from './textarea.module.scss';

type TProps = {
  control?: any;
  name:string;
  placeholder?: string;
  containerClassName?: string;
  className?: string;
  value?: string;
};

export const Textarea: FunctionComponent<TProps> = ({
  control,
  placeholder,
  containerClassName,
  className: propsClassName,
  value: propsValue,
  name,
  ...props
}) => {

  const textareaClassName = classNames(styles.component, propsClassName, sanFrancisco.className);
  const wrapperClassName = classNames(styles.container, containerClassName);

  return (
    <div className={wrapperClassName}>
      <textarea
        className={textareaClassName}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
