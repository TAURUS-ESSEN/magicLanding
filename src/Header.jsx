import {t} from "./languageToggler"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Header({lang, switchLang}) {
    
    return (
            <header className="grid grid-cols-6 h-[100px]" id="header">
                <span className="relative top-2 col-span-1"><Link to="/"><img src='./images/logo.webp' /></Link></span>
                <nav className="menu col-span-4 flex justify-evenly items-center font-medium whitespace-nowrap text-2xl gap-4">
                    <span><a href="/#programs">{t("menu.option1")}</a></span>
                    <span><a href="/#payments">{t("menu.option2")}</a></span>
                    <span><Link to="/about">{t("menu.option3")}</Link></span>
                    <span><a href="/#contact">{t("menu.option4")}</a></span>
                </nav>
                
                <span className="col-span-1 flex items-center "> 
                    <button className="toggler" onClick={switchLang}>
                        {lang === "de" ? "EN" : "DE"}
                    </button>
                    <span>
                        <a href="https://wa.me" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#f89200",}}/>
                        </a>
                    </span>
                    <span>
                        <a href="https://share.google/kq74QHE7IJvYv9xQq" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{color: "#f89200",}}/>
                        </a>
                    </span>
                </span>

            </header>
    )
}