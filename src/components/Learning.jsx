export default function Learning({t}) {
    return (
        <div className="flex flex-col">
            <div>
                <h2 className="h2">{t("learning.title")}</h2>
            </div>
            <div className="-mx-8">
                <img src="learning.webp" />
            </div>
            <div className="bg-[#353535] text-white -mx-8">
                <ul className="list-disc p-8 grid grid-cols-2 text-xl gap-4">
                    {t("learning.points").map(point => (
                        <li className="grid-span-1">{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}