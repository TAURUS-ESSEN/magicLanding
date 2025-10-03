import Form from './Form';
import Timer from './Timer';

export default function Hero({t}) {
    return (
        <section className="mt-10 grid grid-cols-2 gap-20">
            <div className="grid-span-1  flex flex-col justify-center  gap-5">
                <h1 className="h1">{t("hero.headline")}</h1>
                <div className='flex items-center'>
                    <p className='h3'>{t("hero.pitch")}</p>
                    <span><img src="/google.webp" className='w-[240px]' /></span>
                </div>
                <div className='flex justify-center w-[350px] mx-auto my-2'>
                    <Timer t={t}/>
                </div>
            </div>
            <div className="grid-span-1">
                <div className="rounded-3xl">
                    <Form t={t}/>
                </div>
            </div>
        </section>
    )
}