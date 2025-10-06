import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Benefits({t}) {
    return (
        <section className="section block bg-whitedots flex-col max-w-[900px] m-auto my-[50px]">
            <h2 className="h2">{t("benefits.title")}</h2>
            <ul className="grid grid-cols-2 gap-6 ">
                {t("benefits.items").map(b => (
                    <li className="col-span-1 flex gap-4">
                        <span className="min-w-[90px] ">
                            <img src={`${b.icon}.webp`} />
                        </span>
                        <span>{b.text}</span>
                    </li>
                ))}
                <li className="flex flex-col ga-4 max-w-[300px]">
                    <button className="btn bg-orange  text-black">{t("benefits.button")}</button>
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-orange'><FontAwesomeIcon icon={faStar} /> </span>
                        <span className='text-sm'>{t("benefits.note")}</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}