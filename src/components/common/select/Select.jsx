import React, { useCallback } from 'react';
import mergeCl from 'classnames';
import { CATEGORY_LIST } from '../../../utils/constants/app';
import cl from './Select.module.scss';

const Select = ({ changeHandler, current }) => {
  const onChange = useCallback((e) => {
    changeHandler(e.target.value);
  }, []);

  return (
    <select className={cl.select} onChange={onChange} value={current}>
      {CATEGORY_LIST.map(({ id, title }) => (
        <option
          key={id}
          className={mergeCl(cl.list__item, { [cl.active]: current === title })}
        >
          {title}
        </option>
      ))}
    </select>
  );
};

export default Select;
