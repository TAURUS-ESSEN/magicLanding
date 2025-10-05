export default function EntrySupport({t}) {
    return (
        <section className="section flex flex-col gap-2 ">
            <div className="h2">{t("entrySupport.title")}</div>
            <div className="text-xl">{t("entrySupport.text")}</div>
            <div className="flex bg-dots blackBlock p-8 justify-between">
                <div className="flex flex-col gap-8">
                    <div className="text-orange text-3xl">
                        {t("entrySupport.interestTitle")}
                    </div>
                    <div>
                        {t("entrySupport.interestText")}
                    </div>
                    <div>
                        <button className="btn bg-white text-black">{t("entrySupport.button")}</button>
                    </div>
                </div>
                
                <div>
                    <ul className="list-disc text-lg">
                        {t("entrySupport.points").map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
    )
}