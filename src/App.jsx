import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { t, setLang } from "./languageToggler";
import ModalHost from './components/Modal/ModalHost';
import './App.css';
import Header from './Header';
import Footer from './Footer'

function App() {
  const [modal, setModal] = useState({isOpen: false, type: ''});
  const [lang, setLangState] = useState("de");
  const location = useLocation(); 

  const openModal = (type) => setModal({isOpen: true, type: type});
  const closeModal = (type) => setModal({isOpen: false, type: type});

  const switchLang = () => {
    const newLang = lang === "de" ? "en" : "de";
    setLang(newLang);        
    setLangState(newLang);   
  };

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target); 
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    requestAnimationFrame(() => {
      els.forEach((el) => io.observe(el));
    });

    return () => io.disconnect();
  }, [location.pathname, location.hash]);  


  useEffect(() => {
    if (localStorage.getItem('consent') === null) openModal('cookies');
  }, []);

  return (
    <> 
      <div className='wrapper'>
        <Header lang={lang} switchLang={switchLang}/>
        <main >
          <Outlet context={{ t, openModal }} />
        </main>
      </div>
      <ModalHost t={t} closeModal={closeModal} modal={modal}/>
      <Footer t={t} />
    </>
  )
}

export default App
