export default function Karriere({t}) {
    return (
        <section>
            <h2 className="h2">{t("careerPath.title")}</h2>
            <div className="bg-dots -mx-8 ">
                <div className="p-8">
                        <div className="relative ">
                            <div className='orangeLine'></div>
                            {t("careerPath.steps").map((step, i) =>  (
                                <div key={i} className='group flex px-10'>
                                    <div className="min-w-[500px] flex justify-center items-center">
                                            <div className='carriereStep bg-dots'>
                                                <span className='flex-1 p-5 py-2 w-0 flex justify-center'>
                                                    {step.label} 
                                                </span>
                                                <span className='p-2 flex items-center'> 
                                                    <img 
                                                        src={`./${step.icon}.webp`} 
                                                        className='w-[50px]' 
                                                        alt="icon" 
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </div>
                                    </div>
                                    <div className="p-4 text-lg font-medium text-white">
                                        {step.text}
                                    </div>
                                </div>
                            ))} 
                        </div>
                </div>
            </div>
        </section>

    )
}