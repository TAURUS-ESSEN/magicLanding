import Form from './Form'

export default function Final({t}) {
    return (
        <section className="bg-whitedots -mx-4 md:-mx-8 p-4 md:p-8 md:grid grid-cols-2 gap-10">
            <div className='hidden md:block md:col-span-1 reveal'>
                <div><h2 className='h2'>{t("final.headline")}</h2></div>
                <div>{t("final.subline")}</div>
                <div className='relative max-w-[400px] self-end top-8'>
                    <img src="./man.webp" alt="Mann mit Laptop" className=" w-full h-auto"/>
                </div>
            </div>
            <div className='md:col-span-1 reveal'>
                <Form t={t}/>
            </div>
        </section>
    )
}