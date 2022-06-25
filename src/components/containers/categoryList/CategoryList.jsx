import React, { useCallback, useEffect, useMemo, useState } from 'react';
import mergeCl from 'classnames';
import Select from '../../common/select/Select';
import { CATEGORY_LIST } from '../../../utils/constants/app';
import cl from './CategoryList.module.scss';

const CategoryList = ({ changeHandler, current }) => {
  const [component, setComponent] = useState(null);

  const list = useMemo(() => {
    return (
      <ul className={cl.list}>
        {CATEGORY_LIST.map(({ id, title }) => {
          return (
            <li key={id}>
              <button
                className={mergeCl(cl.listButton, {
                  [cl.active]: current === title,
                })}
                onClick={() => changeHandler(title)}
                type="button"
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }, [current]);

  const currentComponent = useMemo(() => {
    if (window.innerWidth > 1040) {
      return list;
    }

    return <Select changeHandler={changeHandler} current={current} />;
  }, [window.innerWidth, current]);

  const resizeHandler = useCallback(() => {
    if (window.innerWidth > 1040) {
      setComponent(list);
    } else {
      setComponent(<Select changeHandler={changeHandler} current={current} />);
    }
  }, [window.innerWidth, list, current]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  useEffect(() => {
    setComponent(currentComponent);
  }, [current]);

  return component;
};

export default CategoryList;
