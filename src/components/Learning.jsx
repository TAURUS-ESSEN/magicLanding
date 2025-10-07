export default function Learning({t}) {
    return (
        <section className="section">
            <div>
                <h2 className="h2">{t("learning.title")}</h2>
            </div>
            <div className="-mx-8 relative">
                <img src="learning.webp" />
                <div className="absolute pointer-events-none inset-0 bg-[linear-gradient(to_top,_#000_0%,_rgba(0,0,0,0)_42%)]"></div>

            </div>
            <div className="bg-black text-white -mx-8">
                <ul className="list-disc grid grod-cols-1 md:grid-cols-2 px-12 py-10 text-xl gap-2">
                    {t("learning.points").map((point, i) => (
                        <li key={i} className="col-span-1">{point}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}