export default function Financing({t, openModal}) {
    return (
        <section className="bg-orange -mx-4 md:-mx-8 px-4 md:px-8 flex flex-col" id="payments">
            <h2 className="h2 mt-4 md:mt-8">{t("financing.title")}</h2>
            <div className="flex flex-col md:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {t("financing.cards").map((card, i) => (
                    <div key={i} className={`${card.style} p-4 md:p-8 col-span-1`}>
                        <div className="md:h-12">{card.badge}</div>
                        <div className="text-orange text-xl md:text-2xl">{card.title}</div>
                        <div className="text-sm md:text-base">{card.text}</div>
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