import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoFooter from '../../images/png/logoFooter.png';
import tel from '../../images/png/tel.png';
import mail from '../../images/png/mail.png';
import location from '../../images/png/location.png';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className={styles.information}>
        <div className={styles.socialMedia}>
          <div className={styles.logo}>
            <img className={styles.image} src={logoFooter} alt="logo" />
            <p className={styles.txtEco}>
              <span className={styles.txtGo}>Go</span>ECO
            </p>
          </div>
          <p className={styles.description}>
            Looking to recycle your unwanted items? 
            Make your recycling needs as easy as possible, use our GoEco to find a location near you!
          </p>
          <div className={styles.socialMediaLinks}>
            <a href="#" className={styles.socialMediaLink}>
              <svg
                className={styles.image}
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75 0.59375C8.21672 0.59375 6.74623 1.20284 5.66204 2.28704C4.57784 3.37123 3.96875 4.84172 3.96875 6.375V9.59375H0.875C0.71967 9.59375 0.59375 9.71967 0.59375 9.875V14.125C0.59375 14.2803 0.71967 14.4062 0.875 14.4062H3.96875V23.125C3.96875 23.2803 4.09467 23.4062 4.25 23.4062H8.5C8.65533 23.4062 8.78125 23.2803 8.78125 23.125V14.4062H11.9024C12.0315 14.4062 12.144 14.3184 12.1753 14.1932L13.2378 9.94321C13.2821 9.7657 13.1479 9.59375 12.9649 9.59375H8.78125V6.375C8.78125 6.11807 8.88331 5.87167 9.06499 5.68999C9.24667 5.50831 9.49307 5.40625 9.75 5.40625H13C13.1553 5.40625 13.2812 5.28033 13.2812 5.125V0.875C13.2812 0.71967 13.1553 0.59375 13 0.59375H9.75Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialMediaLink}>
              <svg
                className={styles.image}
                width="26"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2622 2.78405C25.3346 2.68308 25.2276 2.55272 25.1118 2.59763C24.2884 2.91679 23.4278 3.13213 22.55 3.23825C23.5274 2.65435 24.2816 1.7655 24.6998 0.713167C24.7424 0.605967 24.6254 0.510234 24.5244 0.566001C23.616 1.06767 22.6363 1.42892 21.6186 1.63697C21.576 1.64568 21.5321 1.63117 21.5022 1.59961C20.7385 0.79377 19.7332 0.257226 18.6373 0.0718146C17.5183 -0.117491 16.3682 0.0699484 15.3672 0.604737C14.3663 1.13953 13.5712 1.99141 13.1066 3.0268C12.6648 4.01124 12.5456 5.10863 12.7635 6.16254C12.7804 6.24432 12.7164 6.32152 12.633 6.31634C10.653 6.19336 8.71833 5.6667 6.94832 4.76808C5.18281 3.87174 3.6194 2.62478 2.3533 1.10412C2.29711 1.03663 2.19062 1.04537 2.14968 1.12306C1.75571 1.87064 1.54944 2.70388 1.55 3.55075C1.5484 4.39373 1.75528 5.22402 2.1522 5.96771C2.54912 6.71139 3.12378 7.34539 3.825 7.81325C3.08135 7.79302 2.35219 7.60917 1.68906 7.27584C1.60361 7.23288 1.5011 7.29405 1.50554 7.38959C1.55725 8.50114 1.96532 9.61705 2.67165 10.4732C3.4233 11.3843 4.46657 12.0078 5.625 12.2383C5.17907 12.374 4.7161 12.4455 4.25 12.4508C3.99633 12.4478 3.74315 12.4291 3.49192 12.3947C3.39878 12.382 3.32271 12.4705 3.35532 12.5586C3.70084 13.493 4.31125 14.3083 5.11385 14.9035C5.97191 15.5397 7.00697 15.8927 8.07501 15.9132C6.27151 17.3323 4.04486 18.1068 1.75 18.1133C1.5142 18.114 1.2785 18.1064 1.04336 18.0904C0.910846 18.0813 0.849903 18.2579 0.964122 18.3257C3.20008 19.6526 5.75574 20.3539 8.3625 20.3507C10.2871 20.3707 12.1964 20.007 13.9789 19.2809C15.7614 18.5547 17.3813 17.4806 18.744 16.1214C20.1067 14.7621 21.185 13.145 21.9157 11.3644C22.6464 9.58378 23.0151 7.67541 23 5.75075V5.15096C23 5.1115 23.0187 5.07439 23.0502 5.05061C23.898 4.41043 24.6436 3.64613 25.2622 2.78405Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialMediaLink}>
              <svg
                className={styles.image}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.93756C9.75633 7.93756 7.93748 9.7564 7.93748 12.0001C7.93748 14.2437 9.75633 16.0626 12 16.0626C14.2436 16.0626 16.0625 14.2437 16.0625 12.0001C16.0625 9.7564 14.2436 7.93756 12 7.93756Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46191 0.851893C9.77206 0.37017 14.2279 0.37017 18.5381 0.851893C20.9111 1.11711 22.8251 2.98683 23.1036 5.36815C23.6189 9.7744 23.6189 14.2257 23.1036 18.632C22.8251 21.0133 20.9111 22.883 18.5381 23.1482C14.2279 23.6299 9.77206 23.6299 5.46191 23.1482C3.08891 22.883 1.17492 21.0133 0.896401 18.632C0.38105 14.2257 0.38105 9.7744 0.896401 5.36815C1.17492 2.98683 3.08891 1.11711 5.46191 0.851893ZM18.25 4.50006C17.5596 4.50006 17 5.0597 17 5.75006C17 6.44041 17.5596 7.00006 18.25 7.00006C18.9403 7.00006 19.5 6.44041 19.5 5.75006C19.5 5.0597 18.9403 4.50006 18.25 4.50006ZM6.06248 12.0001C6.06248 8.72087 8.72079 6.06256 12 6.06256C15.2792 6.06256 17.9375 8.72087 17.9375 12.0001C17.9375 15.2792 15.2792 17.9376 12 17.9376C8.72079 17.9376 6.06248 15.2792 6.06248 12.0001Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className={styles.socialMediaLink}>
              <svg
                className={styles.image}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7125 0.617535C11.7216 0.206104 8.68281 0.890725 6.15728 2.54498C3.63176 4.19924 1.79006 6.71141 0.972247 9.61762C0.154439 12.5238 0.415758 15.6278 1.70795 18.3564C3.00015 21.0849 5.23594 23.2538 8.0025 24.4625C7.92768 23.5023 7.99635 22.5363 8.20625 21.5963C8.4375 20.5475 9.82625 14.7675 9.82625 14.7675C9.54971 14.1477 9.4115 13.475 9.42125 12.7963C9.42125 10.94 10.4925 9.55504 11.825 9.55504C12.0644 9.55155 12.3017 9.59965 12.5208 9.69607C12.74 9.79249 12.9358 9.93497 13.0949 10.1138C13.2541 10.2927 13.3729 10.5037 13.4432 10.7325C13.5135 10.9614 13.5338 11.2027 13.5025 11.44C13.5025 12.565 12.78 14.2675 12.4025 15.865C12.3279 16.158 12.3232 16.4644 12.3887 16.7596C12.4542 17.0547 12.5881 17.3303 12.7797 17.5642C12.9713 17.7981 13.2151 17.9837 13.4915 18.1061C13.768 18.2285 14.0693 18.2842 14.3712 18.2688C16.7437 18.2688 18.3337 15.23 18.3337 11.6425C18.3337 8.89253 16.5125 6.83253 13.155 6.83253C12.3517 6.80132 11.5505 6.93369 10.7999 7.2216C10.0494 7.50952 9.36514 7.94697 8.78881 8.5074C8.21248 9.06782 7.75607 9.73954 7.44728 10.4818C7.13848 11.224 6.98376 12.0212 6.9925 12.825C6.95671 13.7167 7.24438 14.5912 7.8025 15.2875C7.90679 15.3654 7.98294 15.475 8.01947 15.5999C8.05599 15.7249 8.05091 15.8583 8.005 15.98C7.9475 16.21 7.8025 16.7588 7.745 16.96C7.73304 17.0283 7.70522 17.0928 7.66378 17.1483C7.62233 17.2038 7.56843 17.2489 7.50641 17.2797C7.44439 17.3106 7.37598 17.3265 7.30669 17.3261C7.2374 17.3258 7.16917 17.3091 7.1075 17.2775C5.3775 16.585 4.5625 14.6813 4.5625 12.5075C4.5625 8.94879 7.5425 4.68879 13.505 4.68879C18.25 4.68879 21.405 8.16003 21.405 11.8725C21.405 16.7588 18.6837 20.4325 14.6625 20.4325C14.0615 20.4517 13.4653 20.3191 12.9292 20.0469C12.393 19.7746 11.9341 19.3716 11.595 18.875C11.595 18.875 10.8725 21.77 10.73 22.3175C10.4391 23.2634 10.0099 24.161 9.45625 24.9813C10.61 25.3313 11.8087 25.5063 13.0137 25.5013C14.6557 25.5026 16.2818 25.18 17.799 24.552C19.3161 23.924 20.6944 23.0029 21.8551 21.8414C23.0157 20.68 23.9359 19.301 24.5628 17.7834C25.1898 16.2658 25.5112 14.6395 25.5087 12.9975C25.5072 9.97878 24.4135 7.06253 22.4295 4.78726C20.4456 2.51199 17.7054 1.03137 14.715 0.618785L14.7125 0.617535Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <nav className={styles.links}>
          <p className={styles.linksTitle}>Menu</p>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/services" className={styles.navLink}>
                Find service
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <p className={styles.contactsTitle}>Contacts</p>
          <ul className={styles.contactLinks}>
            <li className={styles.contactLink}>
              <img src={tel} alt="tel" className={styles.linkLogo}></img>
              <a className={styles.tel} href="tel:+380441234567">
                +38 044 123 45 67
              </a>
            </li>
            <li className={styles.contactLink}>
              <img src={mail} alt="mail" className={styles.linkLogo}></img>
              <a className={styles.mail} href="mailto:support@wasteservice.com">
                support@wasteservice.com
              </a>
            </li>
            <li className={styles.contactLinkAddress}>
              <img src={location} alt="location" className={styles.linkLogo}></img>
              <a className={styles.location} href="https://www.google.com/maps">
                88 Brooklyn golden street lineNew <br />
                York, USA
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>© 2022 | All Rights Reserved | Developed with <FontAwesomeIcon className={styles.icon} icon={faHeart} /> by 
      <HashLink to="/team#title">DreamTeam.</HashLink></p>
    </footer>
  );
};

export default Footer;
