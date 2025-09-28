import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function Certificates({t, openModal}) {
    return (
        <div className="pt-[50px] ">
            <div className="text-[40px]">
                <h2>{t("certificates.title")}</h2>
            </div>
            <div className=" bg-whitedots flex p-4 -mx-8 ">
                <div className=" flex p-4 gap-15">
                <div className="w-full ">
                    <img src="certificate-sm.webp" className="rounded-xl shadow-soft" />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-[20px]">{t("certificates.text")}</div>
                    <div className="flex flex-col text-white text-[24px] bg-dots p-8">
                        {t("certificates.listTitle")}
                        <ul className="grid grid-cols-2">
                            {t("certificates.jobs").map((job, i) => (
                                <li key={i} className="grid-span-1 mt-4"><FontAwesomeIcon icon={faSquareCheck} style={{color: "#f89200",}}/> {job}</li>
                            ))}
                        </ul>
                    </div> 
                    <div className="text-center">
                        <button className="btn bg-orange w-60 p-4 w-70 font-medium" onClick={() => openModal('registration')} >{t("certificates.button")}</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}