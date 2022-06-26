import React, { useCallback, useEffect, useState } from 'react';
import { IMG_DATA } from '../../../utils/constants/app';
import Button from '../../common/button/Button';
import Wrapper from '../../common/wrapper/Wrapper';
import CardList from '../cardList/CardList';
import CategoryList from '../categoryList/CategoryList';
import Spin from '../../common/spin/Spin';
import cl from './GalleryBox.module.scss';

const GalleryBox = () => {
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('Show All');
  const [isLoading, setIsLoading] = useState(true);

  // Функция обработчик по нажатию Load More

  const loadHandler = useCallback(() => {
    setPage(1);
  }, []);

  // Функция удаления выбранных карточек

  const deleteHandler = useCallback(
    (e) => {
      if (e.code === 'Backspace') {
        setList((state) =>
          state.filter((item) => !selectedList.includes(item.name)),
        );

        setSelectedList([]);
      }
    },
    [selectedList],
  );

  // Устанавливает таймер загрузки при первой отрисовке/смене категории

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, [1000]);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, [category]);

  // Устанавливает список карточек в зависимости от того загружены ли дополнительные

  useEffect(() => {
    const actualList = IMG_DATA.filter((_, index) => {
      if (page === 0) {
        return index < 9;
      }

      return index > 8;
    });

    setList((state) => [...new Set([...state, ...actualList])]);
  }, [page]);

  // Добавляет листенер для удаления карточек

  useEffect(() => {
    document.addEventListener('keydown', deleteHandler);

    return () => document.removeEventListener('keydown', deleteHandler);
  }, [deleteHandler]);

  return (
    <section className={cl.container}>
      <Wrapper className={cl.wrapper}>
        <CategoryList changeHandler={setCategory} current={category} />
        {isLoading ? (
          <Spin />
        ) : (
          <CardList
            selectedHandler={setSelectedList}
            selectedList={selectedList}
            list={list}
            category={category}
            categoryHandler={setCategory}
          />
        )}
        {page === 0 ? (
          <Button type="fill" onClick={loadHandler}>
            Load more
          </Button>
        ) : null}
      </Wrapper>
    </section>
  );
};

export default GalleryBox;
