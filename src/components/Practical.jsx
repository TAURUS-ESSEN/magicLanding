export default function Practical({t}) {
    return (
        <>
            <h2 className="h2 mb-5">{t("practical.title")}</h2>
            <div className="flex gap-5">
                <div className="orangeBlock">
                    <img src="go.webp" />
                    {t("practical.cardsTop.card1")}
                </div>
                <div className="blackBlock flex-col text-center bg-dots">
                    <img src="sled.webp" />
                    {t("practical.cardsTop.card2")}
                </div>
                <div className="orangeBlock">
                    <img src="team.webp" />
                    {t("practical.cardsTop.card3")}
                </div>
            </div>
            <div className="my-5 text-xl">{t("practical.subtitle")}</div>
            <div className="grid  grid-cols-2 gap-5">
                <div className="grid-span-1 blackBlock bg-dots">
                    <img src="laggage.webp" />
                    {t("practical.cardsBottom.card1")}
                </div>
                <div className="blackBlock bg-dots">
                    <img src="laptop.webp" />
                    {t("practical.cardsBottom.card2")}
                </div>
            </div>
        </>
    )
}