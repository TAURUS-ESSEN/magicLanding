import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Benefits({t, openModal}) {
    return (
        <section className="block flex-col md:max-w-[900px] m-auto my-6 md:my-9 bg-whitedots ">
            <h2 className="h2">{t("benefits.title")}</h2>
            <ul className="flex flex-col md:grid grid-cols-2 gap-3 md:gap-6 ">
                {t("benefits.items").map(b => (
                    <li className="col-span-1 text-base md:text-lg flex gap-4">
                        <span className="min-w-15 md:min-w-22 flex items-center">
                            <img src={`${b.icon}.webp`} />
                        </span>
                        <span>{b.text}</span>
                    </li>
                ))}
                <li className="flex flex-col ga-4 md:max-w-[300px]">
                    <button onClick={()=>openModal('registration')} className="btn bg-orange text-lg my-2 text-black shine-btn">{t("benefits.button")}</button>
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-orange'><FontAwesomeIcon icon={faStar} /> </span>
                        <span className='text-sm'>{t("benefits.note")}</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}