export default function QuestionsCta({t, openModal}) {
    return (
        <>
        <section className="blackBlock questionsCtaContainer bg-dots">
            <h2 className="h2 font-semibold text-orange">{t("questionsCta.title")}</h2>
            <div className="text-center ">{t("questionsCta.text")}</div>
            <div>
                <button className="btn bg-orange text-base text-black shine-btn" onClick={()=>openModal('registration')}>
                    {t("questionsCta.button")}
                </button>
            </div>
        </section>
        </>
    )
}