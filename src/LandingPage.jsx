import { useOutletContext } from "react-router-dom";
import Slider from './components/Slider';
import Hero from './components/Hero';
import Certificates from './components/Certificates';
import Practical from './components/Practical';
import Learning from './components/Learning';
import CareerSupport from './components/CareerSupport';
import EntrySupport from './components/EntrySupport';
import FutureJobs from './components/FutureJobs';
import Karriere from './components/Karriere';
import Financing from './components/Financing';
import Final from './components/Final';
import Faq from './components/Faq';
import Timer from './components/Timer';
import QuestionsCta from './components/QuestionsCta';

export default function LandingPage() {
    const {t, openModal } = useOutletContext();
    return (
        <>
            <Hero t={t}  openModal={openModal} />
            <Slider t={t}/>
            <Certificates t={t} openModal={openModal}/>
            <Practical t={t} />
            <Learning t={t} />
            <CareerSupport t={t} openModal={openModal}/>
            <EntrySupport t={t} />
            <FutureJobs t={t} />
            {/* <Karriere t={t}/> */}
            {/* <Financing t={t} openModal={openModal}/> */}
            {/* <Final t={t} /> */}
            {/* <Faq t={t} /> */}
            {/* <QuestionsCta t={t} openModal={openModal}/>         */}
        </>
    )
}