import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'

export default function Karriere({t}) {
    return (
        <section className="bg-dots -mx-8 text-white">
            <div className="p-8">
                <h2 className="h2">{t("careerPath.title")}</h2>
                <div className="grid grid-cols-2 gap-8">
                    <div className="grid-span-1">
                        {t("careerPath.steps").map((step, i) =>  (
                            <div key={i} className="py-4  my-8 rounded-xl text-lg w-40 flex justify-center">
                                {step.label} {step.icon}
                                <span className='border-full border-black'> <FontAwesomeIcon icon={faCrown} size="lg" style={{color: "#f89000",}} /></span>
                            </div>
                        ))}
                    </div>
                    <div className="grid-span-1">
                        {t("careerPath.steps").map((step, i) =>  (
                            <div key={i} className="py-4 text-lg">
                                {step.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}