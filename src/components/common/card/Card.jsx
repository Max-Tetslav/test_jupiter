import React, { useCallback } from 'react';
import mergeCl from 'classnames';
import cl from './Card.module.scss';

const Card = ({
  img,
  category,
  name,
  isSelected,
  selectHandler,
  categoryHandler,
}) => {
  // Функция выбора карточки

  const clickHandler = useCallback(() => {
    if (isSelected) {
      selectHandler((state) => state.filter((item) => item !== name));
    } else {
      selectHandler((state) => [...state, name]);
    }
  }, [isSelected]);

  const classes = mergeCl(cl.card, { [cl.active]: isSelected });

  return (
    <div
      className={classes}
      onClick={clickHandler}
      role="button"
      aria-hidden="true"
    >
      <div className={cl.infoBox}>
        <button
          className={cl.category}
          onClick={(e) => {
            e.stopPropagation();
            categoryHandler(category);
          }}
          type="button"
        >
          {category}
        </button>
        <h4 className={cl.name}>{name}</h4>
      </div>
      <img className={cl.img} src={img} alt="card-item" />
    </div>
  );
};

export default Card;
