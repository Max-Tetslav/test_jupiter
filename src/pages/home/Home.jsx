import React from 'react';
import GalleryBox from '../../components/containers/galleryBox/GalleryBox';
import Header from '../../components/containers/header/Header';
import HeadingBox from '../../components/containers/headingBox/HeadingBox';
import cl from './Home.module.scss';

const Home = () => {
  return (
    <main className={cl.container}>
      <Header />
      <HeadingBox />
      <GalleryBox />
    </main>
  );
};

export default Home;
