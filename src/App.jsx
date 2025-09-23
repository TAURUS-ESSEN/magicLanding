import { useState, useEffect } from 'react';
import { t, setLang } from "./languageToggler";
import ModalHost from './components/Modal/ModalHost';
import './App.css';
import Header from './Header';
import Footer from './Footer'

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
      <div className='wrapper'>
        <Header lang={lang} switchLang={switchLang}/>
        <main>
          <h1>{t("hero.headline")}</h1>
          <p>{t("hero.pitch")}</p>
          <button onClick={() => openModal('registration')}>registration</button>
        </main>
      </div>
      <ModalHost closeModal={closeModal} modal={modal} t={t}/>
      <Footer />
    </>
  )
}

export default App
