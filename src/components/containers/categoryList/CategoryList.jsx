import React, { useCallback, useEffect, useMemo, useState } from 'react';
import mergeCl from 'classnames';
import Select from '../../common/select/Select';
import { CATEGORY_LIST } from '../../../utils/constants/app';
import cl from './CategoryList.module.scss';

const CategoryList = ({ changeHandler, current }) => {
  const [component, setComponent] = useState(null);

  // Список категорий для десктопа

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

  // Определяет какой компонент должен быть показан при первой загрузке

  const currentComponent = useMemo(() => {
    if (window.innerWidth > 1040) {
      return list;
    }

    return <Select changeHandler={changeHandler} current={current} />;
  }, [window.innerWidth, current]);

  // Функция вычисления компонента в зависимости от ширины экрана

  const resizeHandler = useCallback(() => {
    if (window.innerWidth > 1040) {
      setComponent(list);
    } else {
      setComponent(<Select changeHandler={changeHandler} current={current} />);
    }
  }, [window.innerWidth, list, current]);

  // Добавляет листенер при изменении размера экрана

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  // Устанавливает компонент при изменении категории

  useEffect(() => {
    setComponent(currentComponent);
  }, [current]);

  return component;
};

export default CategoryList;
