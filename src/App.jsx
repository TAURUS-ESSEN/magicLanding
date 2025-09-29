import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
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
      <div className='wrapper px-8'>
        <Header lang={lang} switchLang={switchLang}/>
        <main>
          <Outlet context={{ t, openModal }} />
          {/* <a href="#header" className='sticky rounded-full border bg-orange p-2 w-10 h-10 flex justify-center align-center -top-0 -right-20'>TOP</a> */}
        </main>
      </div>
      <ModalHost closeModal={closeModal} modal={modal} t={t}/>
      <Footer t={t} />
    </>
  )
}

export default App
