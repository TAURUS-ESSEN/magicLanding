import Form from './Form'
export default function Hero({t, openModal}) {
    return (
        <section className="  mt-5 grid grid-cols-2">
            <div className="grid-span-1  flex flex-col justify-center gap-5">
                <h1 className="h1">{t("hero.headline")}</h1>
                <p>{t("hero.pitch")}</p>
                <span><img src="/google.webp" /></span>
            </div>
            <div className="grid-span-1">
                <div className="rounded-3xl">
                    <Form t={t}/>
                </div>
            </div>
        </section>
    )
}