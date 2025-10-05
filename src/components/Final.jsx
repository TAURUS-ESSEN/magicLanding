import Form from './Form'

export default function Final({t}) {
    return (
        <div className="bg-whitedots -mx-8 p-8 grid grid-cols-2 gap-10">
            <div className='col-span-1'>
                <div><h2 className='h2'>{t("final.headline")}</h2></div>
                <div>{t("final.subline")}</div>
                <div className='relative max-w-[400px] -mb-8 self-end'>
                    <img src="./man.webp" alt='man' className="w-full h-auto"/>
                </div>
            </div>
            <div className='col-span-1'>
                <Form t={t}/>
            </div>
        </div>
    )
}