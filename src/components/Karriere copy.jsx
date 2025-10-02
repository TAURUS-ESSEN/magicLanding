import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faRocket } from '@fortawesome/free-solid-svg-icons'

// const signs = {"rocket" : faRocket, "location" : faCrown }

export default function Karriere({t}) {
    return (
        <section className="bg-dots -mx-8 text-white">
            <div className="p-8">
                <h2 className="h2">{t("careerPath.title")}</h2>
                <div className="flex gap-30 p-4">
                    <div className="grid-span-1 place-items-center">
                        {t("careerPath.steps").map((step, i) =>  (
                            <div key={i} 
                                className="rounded-xl p-5 my-4 border-2 border-orange-500 w-[220px] text-xl flex gap-5 justify-center">
                                <span className='bg-orange flex items-center justify-center flex-wrap'>
                                    {step.label} 
                                </span>
                                <span className='border-full border-black w-50px'> 
                                    {/* {step.icon} */}
                                    {/* { signs[step.icon]} */}

                                    <FontAwesomeIcon icon={faRocket} size="2xl" style={{color: "#f89000",}} />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {t("careerPath.steps").map((step, i) =>  (
                            <div key={i} className="py-4 text-xl font-medium">
                                {step.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}