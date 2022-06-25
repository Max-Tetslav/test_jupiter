import React from 'react';
import mergeCl from 'classnames';
import cl from './Wrapper.module.scss';

const Wrapper = ({ className, children }) => {
  return <div className={mergeCl(cl.container, className)}>{children}</div>;
};

export default Wrapper;
