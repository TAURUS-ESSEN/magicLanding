export default function EntrySupport({t}) {
    return (
        <div className="flex flex-col gap-4 mt-10">
            <div className="h2">{t("entrySupport.title")}</div>
            <div className="text-xl">{t("entrySupport.text")}</div>
            <div className="flex bg-dots blackBlock gap-10">
                <div className="flex flex-col gap-8">
                    <div className="text-orange text-3xl">
                        {t("entrySupport.interestTitle")}
                    </div>
                    <div>
                        {t("entrySupport.interestText")}
                    </div>
                    <div>
                        <button className="btn bg-white text-black w-40">{t("entrySupport.button")}</button>
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
        </div>
        
    )
}