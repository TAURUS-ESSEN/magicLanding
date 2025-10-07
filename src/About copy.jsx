import { useOutletContext } from "react-router-dom";
import Benefits from './components/Benefits';
import Vision from './components/Vision';
import Form from './components/Form'
import Timer from './components/Timer'

export default function About() {
    const {t, openModal } = useOutletContext();

    return (
        <>
        <section className="relative bg-dots -mx-8 p-8 flex gap-10">
            <div className="min-w-[250px] -m-8">
                <img src="about.webp" className="opacity-30 w-full" />
            </div>
            <div className="px-40">
                <h2 className="h2 text-orange">{t("about.title")}</h2> 
                <div className="flex flex-col gap-8 text-xl text-white">
                    <span>{t("about.text")}</span>
                    <span>{t("about.text2")}</span>
                    <span>{t("about.text3")}</span>
                </div>
            </div>
        </section>
        <Benefits t={t}/>
        <Vision t={t}/>
        <section className="section">
            <div className="grid grid-cols-2 gap-5">
                <div className='col-span-1'>
                    <Form t={t}/>
                </div>
                <div className='col-span-1 flex flex-col justify-center items-center text-center max-w-md m-auto'>
                    <h2 className='h2'>{t("timer.title")}</h2>
                    <Timer t={t}/>
                </div>
            </div>
        </section>
        <section className="-mx-8">
            <div className="relative ">
                <img src="community2.webp" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end mb-10 items-center text-orange text-3xl text-center">{t("other")}<p>{t("other2")}</p></div>

            </div>

        </section>
        </>
    )
}