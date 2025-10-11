export default function QuestionsCta({t, openModal}) {
    return (
        <>
        <section className="section blackBlock questionsCtaContainer bg-dots">
            <h2 className="h2 font-semibold text-orange text-center">{t("questionsCta.title")}</h2>
            <div className="text-center ">{t("questionsCta.text")}</div>
            <div>
                <button className="btn bg-orange orange-gradient text-base text-black shine-btn" onClick={()=>openModal('registration')}>
                    {t("questionsCta.button")}
                </button>
            </div>
        </section>
        </>
    )
}