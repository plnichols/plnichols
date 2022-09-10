import React, { ReactElement } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface Props {
  href?: string;
  anchor?: boolean;
  primary?: boolean;
  secondary?: boolean;
  white?: boolean;
  outline?: boolean;
  children: React.ReactNode;
}

const Button = ({ anchor, primary, secondary, white, outline, children, ...rest }: Props): ReactElement => {
  const classes = cn(styles.button, {
    [styles.white]: white,
    [styles.outlinePrimary]: outline && primary,
    [styles.outlineSecondary]: outline && secondary,
    [styles.outlineWhite]: outline && white,
  });

  if (anchor) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
