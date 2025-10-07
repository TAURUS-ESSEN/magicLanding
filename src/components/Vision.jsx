export default function Vision({t}) {
    return (
        <>
        <section className="bg-vision -mx-4 md:-mx-8 ">
            <div className="flex flex-col justify-between items-end h-[900px] p-10">
                <div className="bg-white max-w-[450px] opacity-75 p-3 md:p-6 block flex flex-col gap-4 text-xl rounded-lg">
                    <h3 className="h3 font-semibold text-2xl">{t("mission.title")}</h3>
                    <span className="text-base md:text-xl">{t("mission.textBefore")} <span className="text-orange">{t("mission.slogan")}</span>{t("mission.textAfter")}</span>
                </div>
                <div className="bg-dots max-w-[450px]  text-white p-6 block flex flex-col gap-4 text-xl rounded-lg ">
                    <h3 className="h3 font-semibold text-2xl text-orange">{t("vision.title")}</h3>
                    <div className="text-base md:text-xl">
                        <span >{t("vision.textBefore")} <span className="text-orange">{t("vision.slogan")}</span>{t("vision.textAfter")}</span>
                    </div>
                    <div className="text-base md:text-xl">{t("vision.text")}</div>
                    <div className="text-base md:text-xl">{t("vision.text2")}</div>
                </div>
            </div>
        </section>
        </>
    )
}