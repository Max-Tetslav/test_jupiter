import React from 'react';
import { HEADER_MENU } from '../../../utils/constants/app';
import logo from '../../../assets/logo.svg';
import cl from './Header.module.scss';
import Button from '../../common/button/Button';
import Wrapper from '../../common/wrapper/Wrapper';

const Header = () => {
  return (
    <header className={cl.container}>
      <Wrapper className={cl.wrapper}>
        <div className={cl.logo}>
          <img className={cl.logo__img} src={logo} alt="logo" />
          <span className={cl.logo__text}>Agency</span>
        </div>
        <ul className={cl.menuList}>
          {HEADER_MENU.map(({ id, title }) => (
            <li key={id} className={cl.menuList__item}>
              <a className={cl.menuList__link} href="/">
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Button type="transparent" className={cl.button}>
          Contact
        </Button>
      </Wrapper>
    </header>
  );
};

export default Header;
