export default function Vision({t}) {
    return (
        <>
        <section className="bg-vision -mx-8 ">
            <div className="flex flex-col justify-between items-end h-[900px] p-10">
                <div className="bg-white max-w-[450px] opacity-75 p-6 block flex flex-col gap-4 text-xl ">
                    <h3 className="h3 font-semibold text-2xl">{t("mission.title")}</h3>
                    <span className="xl">{t("mission.textBefore")} <span className="text-orange">{t("mission.slogan")}</span>{t("mission.textAfter")}</span>
                </div>
                <div className="bg-dots max-w-[450px]  text-white p-6 block flex flex-col gap-4 text-xl">
                    <h3 className="h3 font-semibold text-2xl text-orange">{t("vision.title")}</h3>
                    <div>
                        <span className="xl">{t("vision.textBefore")} <span className="text-orange">{t("vision.slogan")}</span>{t("vision.textAfter")}</span>
                    </div>
                    <div>{t("vision.text")}</div>
                    <div>{t("vision.text2")}</div>
                </div>
            </div>
        </section>
        </>
    )
}