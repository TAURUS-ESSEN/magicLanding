export default function Karriere({t}) {
    return (
        <section>
            <h2 className="h2">{t("careerPath.title")}</h2>
            <div className="bg-dots -mx-4 md:-mx-8 ">
                <div className="p-4 md:p-8">
                        <div className="relative ">
                            <div className='orangeLine'></div>
                            {t("careerPath.steps").map((step, i) =>  (
                                <div key={i} className='group flex px-0 md:px-10 gap-2'>
                                    <div className="min-w-[100px] md:min-w-[300px] lg:min-w-[500px] flex justify-center items-center">
                                            <div className='carriereStep bg-dots'>
                                                    <span className='flex-1 p-2 py-2 w-0 flex justify-center items-center'> 
                                                    {step.label} 
                                                </span>
                                                <span className='p-0 md:p-2 flex items-center'> 
                                                    <img 
                                                        src={`./${step.icon}.webp`} 
                                                        className='w-[25px] md:w-[50px]' 
                                                        alt="icon" 
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </div>
                                    </div>
                                    <div className="p-2 md:p-4 text-base md:text-lg font-medium text-white">
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