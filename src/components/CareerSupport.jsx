import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function CareerSupport({t, openModal}) {
    return (
        <section className="flex flex-col section reveal">
            <div>
                <h2 className="h2">{t("careerSupport.title")}</h2>
            </div>
            <div className="careerSupportBlock">
                <div className="row-start-1 col-span-2 md:row-start-1 md:row-span-2 md:col-span-5 blackBlock bg-dots">
                    {t("careerSupport.q1")}
                </div>
                <div className="row-start-2 col-span-1 md:row-start-1 md:col-span-3 grayBlock bg-whitedots justify-center">
                    {t("careerSupport.q2")}
                </div>
                <div className="row-start-3 col-span-2 md:row-start-1 md:row-span-2 md:col-span-4 orangeBlock orange-gradient">
                    {t("careerSupport.q4")}
                </div>
                <div className="row-start-2 col-span-1 md:row-start-2 md:col-span-3 grayBlock bg-whitedots">
                    {t("careerSupport.q3")}
                </div>
                <div className="row-start-4 md:row-start-3 md:col-span-5 grayBlock bg-whitedots">
                    {t("careerSupport.q5")}
                </div>
                <div className="row-start-5 col-span-2 justify-center md:row-start-3 md:row-span-2 md:col-span-3 orangeBlock orange-gradient">
                    {t("careerSupport.q6")}
                </div>
                <div className="row-start-6 col-span-2 md:row-start-3 md:row-span-2 md:col-span-4 blackBlock bg-dots justify-center ">
                    {t("careerSupport.q7")}
                </div>
                <div className="md:row-start-4 md:col-span-5 blackBlock bg-dots justify-center">
                    {t("careerSupport.q8")}
                </div>
            </div>
            <div>
                <button className="btn bg-orange mt-4 shine-btn orange-gradient" onClick={()=>openModal('registration')}>
                    <span className='mr-2'>{t("careerSupport.button")}</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </button>
            </div>
        </section>
    )
}