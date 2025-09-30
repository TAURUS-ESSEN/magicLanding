export default function FutureJobs({t}) {
    const cards = t("futureJobs.cards");
    return (
        <section className="section" id="programs">
            <div>
                <h2 className="h2">{t("futureJobs.title")}</h2>
            </div>
            <div className="flex gap-5">
                    {cards.map((card,i) => (
                        <div className={card.style} key={i}>
                            <div className="text-base">{card.badge}</div>
                            <div className="text-2xl">{card.title}</div>
                            <div className="text-sm">{card.subtitle}</div>
                            <div className="text-sm">{card.text}</div>
                            <div className={card.buttonStyle}>{card.button}</div>
                        </div>
                    ))}
            </div>
        </section>
    )
}