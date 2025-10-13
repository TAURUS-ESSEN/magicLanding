export default function FutureJobs({t}) {
    const cards = t("futureJobs.cards");
    return (
        <section className="section" id="programs">
            <div>
                <h2 className="h2">{t("futureJobs.title")}</h2>
            </div>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-5" role="list">
                    {cards.map((card,i) => (
                        <li className={`${card.style} flex flex-col justify-between `} key={i}>
                            <p className="text-base">{card.badge}</p>
                            <h3 className="text-xl md:text-2xl font-semibold">{card.title}</h3>
                            <p className="text-sm">{card.subtitle}</p>
                            <p className="text-sm">{card.text}</p>
                            <button type="button" className={`${card.buttonStyle} w-40 shine-btn`}>{card.button}</button>
                        </li>
                    ))}
            </ul>
        </section>
    )
}