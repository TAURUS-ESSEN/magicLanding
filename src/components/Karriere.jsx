export default function Karriere({t}) {
    return (
        <>
                <h2 className="h2  ">{t("careerPath.title")}</h2>
        <section className="bg-dots -mx-8 text-white">
            <div className="p-8">
                    <div className="relative ">
                        <div className='absolute left-[290px] top-0 bottom-0 w-px bg-orange-500/70 shadow-orange'></div>
                        {t("careerPath.steps").map((step, i) =>  (
                            <div  key={i} className='group flex px-10 pt-5'>
                                <div 
                                    className="w-[500px] p-2 flex justify-center items-center">
                                        <div className='w-[200px]   px-2 py-2 border-2 border-orange-500 text-xl  bg-dots text-orange flex rounded-3xl z-5 shadow-orange
                                        group-hover:bg-orange group-hover:rounded-full group-hover:text-white transition-colors  group-hover:shadow-white group-hover:border-white
                                        '>
                                            <span className='flex-1 p-6 py-2 w-0 flex items-center justify-center flex-wrap text-center'>
                                                {step.label} 
                                            </span>
                                            <span className='border-full w-50px p-2 flex items-center'> 
                                                <img src={`./${step.icon}.webp`} className='w-[50px]' />
                                            </span>
                                        </div>
                                </div>
                                <div className="flex-1 w-0 p-4 text-lg font-medium">
                                    {step.text}
                                </div>
                            </div>
                        ))} 
                    </div>
            </div>
        </section>
        </>

    )
}