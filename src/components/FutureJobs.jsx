export default function FutureJobs({t}) {
    const cards = t("futureJobs.cards");
    return (
        <section className="section" id="programs">
            <div>
                <h2 className="h2">{t("futureJobs.title")}</h2>
            </div>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-5">
                    {cards.map((card,i) => (
                        <li className={`${card.style} flex flex-col justify-between`} key={i}>
                            <div className="text-base">{card.badge}</div>
                            <div className="text-xl md:text-2xl">{card.title}</div>
                            <div className="text-sm">{card.subtitle}</div>
                            <div className="text-sm">{card.text}</div>
                            <div className={`${card.buttonStyle} w-40`}>{card.button}</div>
                        </li>
                    ))}
            </ul>
        </section>
    )
}