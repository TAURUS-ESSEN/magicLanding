import {t} from "./languageToggler"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Header({lang, switchLang}) {
    
    return (
            <header id="header">
                <span className=" md:col-span-1">
                    <Link to="/">
                        <img src='./images/logo.webp' alt="Logo" className="w-12 md:w-24 md:relative md:top-2 "/>
                    </Link>
                </span>
                <input type="checkbox" id="menu-toggler" />
                    <label htmlFor="menu-toggler" role="button" tabIndex="0"  className="md:hidden ml-auto">
                        <span className="open text-orange">☰ </span>
                        <span className="close text-orange peer-checked:inline">✕</span>
                    </label>

                    <nav className="nav md:flex" id="primary-nav">
                        <ul> 
                            <li><a href="/#programs">{t("menu.option1")}</a></li>
                            <li><a href="/#payments">{t("menu.option2")}</a></li>
                            <li><Link to="/about">{t("menu.option3")}</Link></li>
                            <li><a href="/#contact">{t("menu.option4")}</a></li>
                        
                        <li className="headerIconsBlock"> 
                            <button className="headerIcon" onClick={switchLang}>
                                {lang === "de" ? "EN" : "DE"}
                            </button>
                            <button type="button" className="headerIcon ">
                                <a href="https://wa.me/491701234567" target="_blank" aria-label={t("aria.whatsapp")}>
                                    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                                </a>
                            </button>
                            <button type="button" className="headerIcon ">
                                <a href="https://share.google/kq74QHE7IJvYv9xQq" target="_blank" aria-label={t("aria.location")}>
                                    <FontAwesomeIcon icon={faLocationDot} size="xl"/>
                                </a>
                            </button>
                        </li>
                        </ul> 
                    </nav>
            </header>
    )
}