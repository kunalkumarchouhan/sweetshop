import React from 'react';
import { Link } from "react-router-dom";
import meta from '../../app.json';
import styles from './footer.module.scss';

const Footer = props => {
  const heart = {
    color: "#ff4141"
  };
  return (
    <footer className={ styles.footer }>
      <div className={styles.footer__misc}>
        <Link to="/" className={ `${ styles.footer__misc__title } link title` }>
          { meta.title }
        </Link>
        <div className={styles.footer__misc__social}>
          {
            meta.socials.map((social, index) => {
              return (
                <a href={ social.ref } target="_blank" rel="noopener noreferrer" key={ index }>
                  <i className={social.icon}></i>
                </a>
              );
            })
          }
        </div>
      </div>
      <div className={`${styles.footer__misc} ${styles.footer__address}`} style={{borderTop: "none"}}>
        <p>Proprietor: Kunal Chauhan</p>
        <p>Address: Pakhnaha Chowk, NH-28, Kanti, Muzaffarpur - 843109</p>
        <p>Contact: <a href="tel:+917992322764">+91 7992322764</a></p>
      </div>
      <div className={ styles.footer__legal }>
        <div className={ styles.footer__legal__copyright }>
          { meta.date.year } &copy; All Right Reserved.
        </div>
        <div className={ styles.footer__legal__dev }>
          Developed with <i style={ heart } className="fa fa-heart"></i> by <a href={meta.developer.url} className="link link__primary">{ meta.developer.name }</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
