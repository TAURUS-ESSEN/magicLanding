import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function Certificates({t, openModal}) {
    return (
        <section className="mt-12">
            <h2 className='h2 mb-2'>{t("certificates.title")}</h2>
            <div className="bg-whitedots flex p-4 -mx-8 ">
                <div className="flex items-center p-4 gap-15">
                    <div className="w-full">
                        <img src="certificate-sm.webp" className="rounded-xl shadow-soft" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl leading-relaxed md:pr-6">
                            {t("certificates.text")}
                        </div>
                        <div className="flex flex-col text-white text-xl bg-dots rounded-xl p-8">
                            {t("certificates.listTitle")}
                            <ul className="grid grid-cols-2">
                                {t("certificates.jobs").map((job, i) => (
                                    <li key={i} className="grid-span-1 mt-4">
                                        <FontAwesomeIcon icon={faSquareCheck} style={{color: "#f89200",}}/> {job}
                                    </li>
                                ))}
                            </ul>
                        </div> 
                        <div>
                            <button className="btn2 bg-orange font-medium" onClick={() => openModal('registration')} >
                                {t("certificates.button")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}