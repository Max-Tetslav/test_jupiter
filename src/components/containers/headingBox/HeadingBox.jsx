import React from 'react';
import Wrapper from '../../common/wrapper/Wrapper';
import cl from './HeadingBox.module.scss';

const HeadingBox = () => {
  return (
    <section className={cl.container}>
      <Wrapper className={cl.wrapper}>
        <h2 className={cl.heading}>Portfolio</h2>
        <p className={cl.info}>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </Wrapper>
    </section>
  );
};

export default HeadingBox;
