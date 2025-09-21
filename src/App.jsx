import { useState, useEffect } from 'react';
import de from "./locales/de.json";
import en from "./locales/en.json";
import ModalHost from './components/Modal/ModalHost';
import './App.css';
import Header from './Header';

function App() {
  const [modal, setModal] = useState({isOpen: false, type: ''});
  const [lang, setLang] = useState("de");

  const openModal = (type) => setModal({isOpen: true, type: type});
  const closeModal = (type) => setModal({isOpen: false, type: type});

  // обычный объект, да: { de: de, en: en }
  const translations = { de, en };

  const switchLang = () => {
    setLang(prev => (prev === "de" ? "en" : "de"));
  };

  const t = (key) => translations[lang]?.[key] ?? key;

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
    </>
  )
}

export default App
