import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function CareerSupport({t, openModal}) {
    return (
        <section className="flex flex-col section gap-5">
            <div>
                <h2 className="h2">{t("careerSupport.title")}</h2>
            </div>
            <div className="grid grid-rows-3 grid-cols-12 gap-6 text-center auto-rows-fr ">
                <div className="row-start-1 row-span-2 col-span-5 p-3 blackBlock bg-dots">
                    {t("careerSupport.q1")}
                </div>
                <div className="row-start-1 col-span-3 p-3 grayBlock bg-whitedots justify-center">
                    {t("careerSupport.q2")}
                </div>
                <div className="row-start-1 row-span-2 p-3 col-span-4 orangeBlock">
                    {t("careerSupport.q4")}
                </div>
                <div className="row-start-2 col-span-3 p-3 grayBlock bg-whitedots">
                    {t("careerSupport.q3")}
                </div>
                <div className="row-start-3 col-span-5 p-3 grayBlock bg-whitedots ">
                    {t("careerSupport.q5")}
                </div>
                <div className="row-start-3 row-span-2 col-span-3 p-3 orangeBlock">
                    {t("careerSupport.q6")}
                </div>
                <div className="row-start-3 row-span-2 col-span-4 p-3 blackBlock bg-dots justify-center ">
                    {t("careerSupport.q7")}
                </div>
                <div className="row-start-4 col-span-5 p-3 blackBlock bg-dots justify-center">
                    {t("careerSupport.q8")}
                </div>
            </div>
            <div>
                <button className="btn bg-orange font-semibold w-60" onClick={()=>openModal('registration')}>
                    {t("careerSupport.button")} <span className='mr-2'> </span><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#080808",}} />
                </button>
            </div>
        </section>
    )
}