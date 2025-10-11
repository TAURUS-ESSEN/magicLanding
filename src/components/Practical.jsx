export default function Practical({t}) {
    return (
        <section className="section">
            <h2 className="h2">{t("practical.title")}</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                <div className="orangeBlock md:flex-col orange-gradient">
                    <img src="go.webp" className="w-[60px] md:w-[90px]" />
                    {t("practical.cardsTop.card1")}
                </div>
                <div className="blackBlock md:flex-col text-center bg-dots">
                    <img src="sled.webp" className="w-[60px] md:w-[90px]"/>
                    {t("practical.cardsTop.card2")}
                </div>
                <div className="orangeBlock md:flex-col orange-gradient">
                    <img src="team.webp" className="w-[60px] md:w-[90px]"/>
                    {t("practical.cardsTop.card3")}
                </div>
            </div>
            <h3 className="my-2 md:my-5 h3">{t("practical.subtitle")}</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
                <div className="col-span-1 blackBlock flex-col md:flex-row justify-start items-center text-center bg-dots">
                    <img src="laggage.webp" className="w-[60px] md:w-[90px]"/>
                    {t("practical.cardsBottom.card1")}
                </div>
                <div className="blackBlock flex-col md:flex-row justify-start text-center bg-dots">
                    <img src="laptop.webp" className="w-[60px] md:w-[90px]"/>
                    {t("practical.cardsBottom.card2")}
                </div>
            </div>
        </section>
    )
}