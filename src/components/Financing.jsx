export default function Financing({t, openModal}) {
    return (
        <section className="bg-orange -mx-8 px-8 flex flex-col gap-4" id="payments">
            <h2 className="h2">{t("financing.title")}</h2>
            <div className="grid grid-cols-4 gap-5">
                {t("financing.cards").map(card => (
                    <div className={`${card.style} grid-span-1 justify-between`}>
                        <div>{card.badge}</div>
                        <div className="text-orange text-2xl">{card.title}</div>
                        <div className="text-base">{card.text}</div>
                    </div>
                ))}
            </div>
            <div className="mb-8"><button className="btn2 text-white bg-dots" onClick={()=>openModal('registration')}>{t("financing.button")}</button></div>
        </section>
    )
}