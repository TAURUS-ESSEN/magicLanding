import {t} from "./languageToggler"

export default function Header({lang, switchLang}) {
    
    return (
        <>
            {/* <header className="flex justify-between items-center h-[100px]"> */}
            <header className="grid grid-cols-6    h-[100px]">
                <span className="relative top-2 col-span-1"><img src='./images/logo.webp' /></span>
                <nav className="menu col-span-4 flex justify-evenly items-center font-medium whitespace-nowrap text-2xl gap-4">
                    <span>{t("menu.option1")}</span>
                    <span>{t("menu.option2")}</span>
                    <span>{t("menu.option3")}</span>
                    <span>{t("menu.option4")}</span>
                </nav>
                
                <span className="col-span-1 flex justify-evenly items-center "> 
                    <button onClick={switchLang}>
                        {lang === "de" ? "EN" : "DE"}
                    </button>
                    <button>

                    </button>
                </span>
            </header>
        </>
    )
}