import React from 'react';
import mergeCl from 'classnames';
import cl from './Button.module.scss';

const Button = ({ type, onClick, className, children }) => {
  const classes = mergeCl(
    cl.button,
    className,
    { [cl.transparent]: type === 'transparent' },
    { [cl.fill]: type === 'fill' },
  );

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
