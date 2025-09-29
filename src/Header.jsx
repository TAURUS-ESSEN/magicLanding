import {t} from "./languageToggler"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Header({lang, switchLang}) {
    
    return (
        <>
            {/* <header className="flex justify-between items-center h-[100px]"> */}
            <header className="grid grid-cols-6 h-[100px]" id="header">
                <span className="relative top-2 col-span-1"><Link to="/"><img src='./images/logo.webp' /></Link></span>
                <nav className="menu col-span-4 flex justify-evenly items-center font-medium whitespace-nowrap text-2xl gap-4">
                    <span><a href="/#programs">{t("menu.option1")}</a></span>
                    <span><a href="/#payments">{t("menu.option2")}</a></span>
                    <span><Link to="/about">{t("menu.option3")}</Link></span>
                    <span><a href="/#contact">{t("menu.option4")}</a></span>
                </nav>
                
                <span className="col-span-1 flex items-center "> 
                    <button className="border-1 orange p-1 rounded-sm" onClick={switchLang}>
                        {lang === "de" ? "EN" : "DE"}
                    </button>
                    <span>
                         <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#f89200",}}/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{color: "#f89200",}}/>
                    </span>
                </span>

            </header>
        </>
    )
}