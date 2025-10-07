import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function Certificates({t, openModal}) {
    return (
        <section className="section">
            <h2 className='h2'>{t("certificates.title")}</h2>
            <div className="bg-whitedots flex p-4 -mx-8  ">
                <div className="flex items-center p-4 gap-8">
                    <div className="w-full">
                        <img src="certificate-sm.webp" loading="lazy" className="rounded-xl shadow-leicht" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl leading-relaxed md:pr-6">
                            {t("certificates.text")}
                        </div>
                        <div className=" flex flex-col text-white rounded-xl md:rounded-3xl p-4 md:p-8 bg-dots rounded-xl text-xl">
                            {t("certificates.listTitle")}
                            <ul className="grid grid-cols-2">
                                {t("certificates.jobs").map((job, i) => (
                                    <li key={i} className="col-span-1 mt-4">
                                        <FontAwesomeIcon icon={faSquareCheck} className='text-orange'/> {job}
                                    </li>
                                ))}
                            </ul>
                        </div> 
                        <div>
                            <button className="btn bg-orange" onClick={() => openModal('registration')} >
                                {t("certificates.button")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}