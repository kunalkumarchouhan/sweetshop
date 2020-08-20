import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import meta from '../../app.json';
import styles from './header.module.scss';

const Header = () => {
  const location = useLocation();
  return (
    <header className={ styles.header }>
      <div className={ styles.header__title }>
        <h3 className={ styles.header__title__name }>
          <Link to="/" className="title">
            { meta.title }
          </Link>
        </h3>
        <p className={ styles.header__title__description }>( { meta.description } )</p>
      </div>
      <ul className={ styles.header__links }>
        {
          meta.sections.map((link, index) => {
            return (
              <li className={`
                ${styles.header__links__link}
                ${(location.pathname === link.ref) && styles.header__links__link_active}
              `}
               key={ index }
              >
                <Link to={ link.ref } className="link link__primary">
                  { link.title }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  );
}

export default Header;
