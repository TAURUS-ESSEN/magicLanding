import { useOutletContext } from "react-router-dom";
import Benefits from './components/Benefits';
import Vision from './components/Vision';
import Form from './components/Form'
import Timer from './components/Timer'

export default function About() {
    const {t, openModal } = useOutletContext();

    return (
        <>
        <section className="  flex justify-end gap-4 md:gap-10 -mx-4 md:-mx-8 p-4 md:p-8 bg-about  reveal">
            <div className="flex flex-col justify-end md:w-100 py-8 md:py-18">
                <h2 className="h2 text-2xl md:text-3xl text-orange">{t("about.title")}</h2> 
                <div className="flex flex-col gap-8 text-lg md:text-2xl text-white font-medium leading-relaxed">
                    <span>{t("about.text")}</span>
                    <span>{t("about.text2")}</span>
                    <span>{t("about.text3")}</span>
                </div>
            </div>
        </section>
        <Benefits t={t} openModal={openModal}/>
        <Vision t={t}/>
        <section className="section reveal">
            <div className="flex flex-col md:grid grid-cols-2 gap-6">
                <div className='col-span-1 flex flex-col justify-center items-center text-center max-w-md m-auto animate-fade-up-400'>
                    <h2 className='h2'>{t("timer.title")}</h2>
                    <Timer t={t}/>
                </div>
                                <div className='col-span-1'>
                    <Form t={t}/>
                </div>
            </div>
        </section>
        <section className="section -mx-4 md:-mx-8 reveal">
            <div className="relative ">
                <img src="community2.webp" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end px-5 mb-0 md:mb-10 text-orange text-base md:2xl lg:text-3xl text-center">
                    {t("other")}<p>{t("other2")}</p></div>

            </div>

        </section>
        </>
    )
}