export default function EntrySupport({t}) {
    return (
        <section className="section reveal flex flex-col gap-2 ">
            <h2 className="h2">{t("entrySupport.title")}</h2>
            <div className="text-base md:text-xl">{t("entrySupport.text")}</div>
            <div className="flex flex-col md:flex-row bg-dots blackBlock p-4 md:p-8 justify-between">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="text-orange text-xl md:text-3xl">
                        {t("entrySupport.interestTitle")}
                    </div>
                    <div className="text-base">
                        {t("entrySupport.interestText")}
                    </div>
                    <div>
                        <button
                            type="button"
                            aria-haspopup="dialog" 
                            className="btn bg-white text-black shine-btn">
                                {t("entrySupport.button")}
                        </button>
                    </div>
                </div>
                
                <div>
                    <ul role="list" className="list-disc text-sm pl-4 md:text-lg font-regular">
                        {t("entrySupport.points").map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
    )
}