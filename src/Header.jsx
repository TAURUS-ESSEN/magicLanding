import {t} from "./languageToggler"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Header({lang, switchLang}) {
    
    return (
            <header id="header">
                <span className="headerLogo">
                    <Link to="/">
                        <img src='./images/logo.webp' alt="Logo"/>
                    </Link>
                </span>
                <nav>
                    <span><a href="/#programs">{t("menu.option1")}</a></span>
                    <span><a href="/#payments">{t("menu.option2")}</a></span>
                    <span><Link to="/about">{t("menu.option3")}</Link></span>
                    <span><a href="/#contact">{t("menu.option4")}</a></span>
                </nav>
                
                <span className="headerIconsBlock"> 
                    <button className="headerIcon" onClick={switchLang}>
                        {lang === "de" ? "EN" : "DE"}
                    </button>
                    <span className="headerIcon">
                        <a href="https://wa.me/491701234567" target="_blank" aria-label={t("aria.whatsapp")}>
                            <FontAwesomeIcon icon={faWhatsapp} size="2xl"  />
                        </a>
                    </span>
                    <span className="headerIcon">
                        <a href="https://share.google/kq74QHE7IJvYv9xQq" target="_blank" aria-label={t("aria.location")}>
                            <FontAwesomeIcon icon={faLocationDot} size="2xl"/>
                        </a>
                    </span>
                </span>
            </header>
    )
}