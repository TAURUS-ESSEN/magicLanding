export default function CareerSupport({t}) {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="h2">{t("careerSupport.title")}</h2>
            </div>
            <div className="grid grid-rows-3 grid-cols-12 gap-8 text-center ">
                <div className="row-start-1 row-span-2 col-span-5 text-2xl blackBlock bg-dots">
                    {t("careerSupport.q1")}
                </div>
                <div className="row-start-1 col-span-3 grayBlock bg-whitedots">
                    {t("careerSupport.q2")}
                </div>
                <div className="row-start-1 row-span-2 col-span-4 orangeBlock">
                    {t("careerSupport.q4")}
                </div>
                <div className="row-start-2 col-span-3 grayBlock bg-whitedots">
                    {t("careerSupport.q3")}
                </div>
                <div className="row-start-3 col-span-5  grayBlock bg-whitedots">
                    {t("careerSupport.q5")}
                </div>
                <div className="row-start-3 row-span-2 col-span-3  orangeBlock">
                    {t("careerSupport.q6")}
                </div>
                <div className="row-start-3 row-span-2 col-span-4   blackBlock bg-dots">
                    {t("careerSupport.q7")}
                </div>
                <div className="row-start-4 col-span-5  blackBlock bg-dots">
                    {t("careerSupport.q8")}
                </div>
            </div>
            <div>
                <button className="btn bg-orange w-60">{t("careerSupport.button")}</button>
            </div>
        </div>
    )
}