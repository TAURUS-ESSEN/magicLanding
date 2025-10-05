export default function Financing({t, openModal}) {
    return (
        <section className="bg-orange -mx-8 px-8 flex flex-col" id="payments">
            <h2 className="h2 mt-8">{t("financing.title")}</h2>
            <div className="grid grid-cols-4 gap-5">
                {t("financing.cards").map((card, i) => (
                    <div key={i} className={`${card.style} p-8 col-span-1`}>
                        <div className="h-12">{card.badge}</div>
                        <div className="text-orange text-2xl">{card.title}</div>
                        <div className="text-base">{card.text}</div>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <button type="button" className="btn text-white bg-black mt-4" onClick={()=>openModal('registration')}>
                    {t("financing.button")}
                </button>
            </div>
        </section>
    )
}