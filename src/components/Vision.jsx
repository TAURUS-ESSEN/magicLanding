export default function Vision({t}) {
    return (
        <section className="section bg-vision -mx-4 md:-mx-8 ">
            <div className="md:h-[900px] flex flex-col gap-4 justify-evenly items-end p-6 md:p-10">
                <article className="bg-whitedots visionCard">
                    <h3 className="h3 font-semibold text-2xl">{t("mission.title")}</h3>
                    <p>
                        {t("mission.textBefore")} 
                        <span className="text-orange">
                            {t("mission.slogan")}
                        </span>
                        {t("mission.textAfter")}
                    </p>
                </article>
                <article className="bg-dots visionCard text-white">
                    <h3 className="h3 font-semibold text-2xl text-orange">{t("vision.title")}</h3>
                    <div>
                        <p>{t("vision.textBefore")} 
                            <span className="text-orange">
                                {t("vision.slogan")}
                            </span>
                            {t("vision.textAfter")}
                        </p>
                    </div>
                    <div>{t("vision.text")}</div>
                    <div>{t("vision.text2")}</div>
                </article>
            </div>
        </section>
    )
}