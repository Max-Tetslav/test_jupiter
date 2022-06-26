import React, { useMemo, useState, useEffect } from 'react';
import Card from '../../common/card/Card';
import cl from './CardList.module.scss';

const CardList = ({
  list,
  selectedList,
  selectedHandler,
  category,
  categoryHandler,
}) => {
  const [filteredList, setFilteredList] = useState([]);

  // Устанавливает первоначальный список карточек

  useEffect(() => {
    if (!filteredList.length) {
      setFilteredList(list);
    }
  }, [list]);

  // Фильтрует карточки при смене категории

  useEffect(() => {
    if (category === 'Show All') {
      setFilteredList(list);
    } else {
      setFilteredList(list.filter((item) => item.category === category));
    }
  }, [category, list]);

  // Элемент при пустом списке карточек в зависимости от категории

  const emptyList = useMemo(() => {
    if (category === 'Show All') {
      return <h3>No cards</h3>;
    }

    return <h3>No such cards</h3>;
  }, [category]);

  return (
    <div className={cl.container}>
      {!filteredList.length
        ? emptyList
        : filteredList.map(({ id, src, name, category: type }) => (
            <Card
              img={src}
              name={name}
              category={type}
              isSelected={selectedList.includes(name)}
              key={id}
              selectHandler={selectedHandler}
              categoryHandler={categoryHandler}
            />
          ))}
    </div>
  );
};

export default CardList;
