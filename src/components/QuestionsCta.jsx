export default function QuestionsCta({t, openModal}) {
    return (
        <>
        <div className="blackBlock my-[50px] mx-auto flex-col bg-dots w-200">
            <div className="text-[42px] font-semibold text-orange">{t("questionsCta.title")}</div>
            <div className="text-center">{t("questionsCta.text")}</div>
            <div><button className="btn bg-orange text-base text-black  " onClick={()=>openModal('registration')}>{t("questionsCta.button")}</button></div>
        </div>
        </>
    )
}