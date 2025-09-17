import {t} from "./languageToggler"

export default function Header({lang, switchLang}) {
    
    return (
        <>
            <header>
                <span>Logo</span>

                <span className="menu">
                    <span>{t("menu.option1")}</span>
                    <span>{t("menu.option2")}</span>
                    <span>{t("menu.option3")}</span>
                </span>
                
                <span> 
                    <button onClick={switchLang}>
                        {lang === "de" ? "EN" : "DE"}
                    </button>
                </span>
            </header>
        </>
    )
}