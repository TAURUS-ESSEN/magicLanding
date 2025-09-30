export default function Practical({t}) {
    return (
        <section className="section">
            <h2 className="h2 mb-4">{t("practical.title")}</h2>
            <div className="flex gap-5 ">
                <div className="orangeBlock flex-col">
                    <img src="go.webp" />
                    {t("practical.cardsTop.card1")}
                </div>
                <div className="blackBlock flex-col text-center bg-dots">
                    <img src="sled.webp" />
                    {t("practical.cardsTop.card2")}
                </div>
                <div className="orangeBlock flex-col">
                    <img src="team.webp" />
                    {t("practical.cardsTop.card3")}
                </div>
            </div>
            <h3 className="my-5 h3">{t("practical.subtitle")}</h3>
            <div className="grid grid-cols-2 gap-5">
                <div className="grid-span-1 blackBlock bg-dots">
                    <img src="laggage.webp" />
                    {t("practical.cardsBottom.card1")}
                </div>
                <div className="blackBlock bg-dots">
                    <img src="laptop.webp" />
                    {t("practical.cardsBottom.card2")}
                </div>
            </div>
        </section>
    )
}