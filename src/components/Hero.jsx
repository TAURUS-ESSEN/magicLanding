import Form from './Form';
import Timer from './Timer';

export default function Hero({t}) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:gap-20 mt-2 md:mt-4 reveal">
            <div className="flex flex-col gap-2 justify-center md:col-span-1 md:gap-5">
                <h1 className="h1">{t("hero.headline")}</h1>
                <div className='flex items-center'>
                    <p className='h3'>{t("hero.pitch")}</p>
                    <span>
                        <img src="/google.webp" className='w-60' alt="Google Rating 4.9" loading="lazy"/>
                    </span>
                </div>
                <div className='heroTimer'>
                    <Timer t={t}/>
                </div>
            </div>
            <div className="md:col-span-1">
                <div>
                    <Form t={t}/>
                </div>
            </div>
        </section>
    )
}