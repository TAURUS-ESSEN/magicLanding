import Form from './Form'

export default function Final({t}) {
    return (
        <div className="bg-whitedots -mx-8 p-8 grid grid-cols-2 gap-10">
            <div className='col-span-1'>
                <div><h2 className='text-[40px]'>{t("final.headline")}</h2></div>
                <div>{t("final.subline")}</div>
                <div className='relative w-[400px] bottom-0 -mb-8 left-0'><img src="./man.webp"/></div>
            </div>
            <div className='col-span-1'>
                <Form t={t}/>
            </div>
        </div>
    )
}