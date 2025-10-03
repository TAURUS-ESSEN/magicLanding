export default function Financing({t, openModal}) {
    return (
        <section className="bg-orange -mx-8 px-8 flex flex-col gap-4 " id="payments">
            <h2 className="h2 mt-8 ">{t("financing.title")}</h2>
            <div className="grid grid-cols-4 gap-5">
                {t("financing.cards").map(card => (
                    <div className={`${card.style} p-8 grid-span-1`}>
                        <div className="h-12">{card.badge}</div>
                        <div className="text-orange text-2xl">{card.title}</div>
                        <div className="text-base">{card.text}</div>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <button className="btn text-white bg-black" onClick={()=>openModal('registration')}>
                    {t("financing.button")}
                </button>
            </div>
        </section>
    )
}