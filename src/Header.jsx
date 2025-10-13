import { t } from './languageToggler';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Header({ lang, switchLang }) {
    return (
        <header id="header">
        <span className="md:col-span-1">
            <Link to="/">
            <img src="./images/logo.webp" alt="Logo" className="w-12 md:relative md:top-2 md:w-24" />
            </Link>
        </span>
        <input type="checkbox" id="menu-toggler" className="peer hidden" />
        <label htmlFor="menu-toggler" role="button" tabIndex="0" className="ml-auto md:hidden">
            <span className="open text-orange shine-btn peer-checked:hidden">☰</span>
            <span className="close text-orange shine-btn hidden peer-checked:inline">✕</span>
        </label>

        <nav className="nav md:flex" id="primary-nav">
            <ul>
            <li>
                <HashLink smooth to="/#programs">
                {t('menu.option1')}
                </HashLink>
            </li>
            <li>
                <HashLink smooth to="/#payments">
                {t('menu.option2')}
                </HashLink>
            </li>
            <li>
                <Link to="/about">{t('menu.option3')}</Link>
            </li>
            <li>
                <HashLink smooth to="/#contact">
                {t('menu.option4')}
                </HashLink>
            </li>

            <li className="headerIconsBlock">
                <button className="headerIcon shine-btn" onClick={switchLang}>
                {lang === 'de' ? 'EN' : 'DE'}
                </button>
                <a
                href="https://wa.me/491701234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('aria.whatsapp')}
                className="headerIcon shine-btn"
                >
                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </a>
                <a
                href="https://share.google/kq74QHE7IJvYv9xQq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('aria.location')}
                className="headerIcon shine-btn"
                >
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}
