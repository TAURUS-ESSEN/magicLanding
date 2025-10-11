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
                <input type="checkbox" id="menu-toggler" className="peer hidden" />
                    <label htmlFor="menu-toggler" role="button" tabIndex="0"  className="md:hidden ml-auto">
                        <span className="open text-orange peer-checked:hidden">☰</span>
                        <span className="close text-orange hidden peer-checked:inline">✕</span>
                    </label>

                    <nav className="nav md:flex" id="primary-nav">
                        <ul> 
                            <li>
                                <Link to={{ pathname: "/", hash: "#programs" }}>
                                {t("menu.option1")}
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: "/", hash: "#payments" }}>
                                {t("menu.option2")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">{t("menu.option3")}</Link>
                            </li>
                            <li>
                                <Link to={{ pathname: "/", hash: "#contact" }}>
                                {t("menu.option4")}
                                </Link>
                            </li>
                        
                            <li className="headerIconsBlock"> 
                                <button className="headerIcon" onClick={switchLang}>
                                    {lang === "de" ? "EN" : "DE"}
                                </button>
                                <a 
                                    href="https://wa.me/491701234567" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    aria-label={t("aria.whatsapp")} 
                                    className="headerIcon"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                                </a>
                                <a 
                                    href="https://share.google/kq74QHE7IJvYv9xQq" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    aria-label={t("aria.location")} 
                                    className="headerIcon"
                                >
                                    <FontAwesomeIcon icon={faLocationDot} size="xl"/>
                                </a>
                            </li>
                        </ul> 
                    </nav>
            </header>
    )
}