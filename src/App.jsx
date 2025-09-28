import { useState, useEffect } from 'react';
import { t, setLang } from "./languageToggler";
import ModalHost from './components/Modal/ModalHost';
import './App.css';
import Header from './Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Footer from './Footer'
import Certificates from './components/Certificates';
import Practical from './components/Practical';
import Learning from './components/Learning';
import CareerSupport from './components/CareerSupport';
import EntrySupport from './components/EntrySupport';
import FutureJobs from './components/FutureJobs';

function App() {
  const [modal, setModal] = useState({isOpen: false, type: ''});
  const [lang, setLangState] = useState("de");

  const openModal = (type) => setModal({isOpen: true, type: type});
  const closeModal = (type) => setModal({isOpen: false, type: type});

  const switchLang = () => {
    const newLang = lang === "de" ? "en" : "de";
    setLang(newLang);        
    setLangState(newLang);   
  };

  useEffect(() => {
    if (localStorage.getItem('consent') === null) openModal('cookies');
  }, []);

  return (
    <> 
      <div className='wrapper px-8'>
        <Header lang={lang} switchLang={switchLang}/>
        <main>
          <Hero t={t}  openModal={openModal} />
          <Slider t={t}/>
          <Certificates t={t} openModal={openModal}/>
          <Practical t={t} />
          <Learning t={t} />
          <CareerSupport t={t} />
          <EntrySupport t={t} />
          <FutureJobs t={t} />
        </main>
      </div>
      <ModalHost closeModal={closeModal} modal={modal} t={t}/>
      <Footer />
    </>
  )
}

export default App
