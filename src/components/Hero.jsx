import Form from './Form';
import Timer from './Timer';

export default function Hero({t}) {
    return (
        <section className="mt-2 md:mt-8 hero">
            <div className="heroTimerBlock">
                <h1 className="h1">{t("hero.headline")}</h1>
                <div className='flex items-center'>
                    <p className='h3'>{t("hero.pitch")}</p>
                    <span><img src="/google.webp" className='w-[240px]' alt="Google Rating"/></span>
                </div>
                <div className='heroTimer'>
                    <Timer t={t}/>
                </div>
            </div>
            <div className="md:grid-span-1">
                <div>
                    <Form t={t}/>
                </div>
            </div>
        </section>
    )
}