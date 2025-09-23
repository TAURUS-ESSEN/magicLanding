import styles from './modal.module.css';
import { useEffect } from 'react';
import {createPortal} from 'react-dom';

export default function Modal({title, children, closeModal, mode}) {
    const rootModal = document.getElementById('root-modal');
    console.log('mode', mode);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && closeModal();
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener("keydown", onKey)
        }
    }, [closeModal])

    return createPortal(
        <>
            <div className={mode === 'cookies' ? styles.modalCookiesOverlay : styles.modalOverlay} onClick={(e)=> {e.currentTarget === e.target && closeModal()}}>
                <div className={mode === 'cookies' ? styles.modalCookiesContent : styles.modalContent}>
                    <div className=" ">
                        <span className='flex justify-between text-cyan-500 p-2'>
                            <h3 className={styles.modalTitle}>{title}</h3>
                            <button onClick={closeModal} className="">&#10005;</button>
                        </span>
                        <hr />
                    </div>
                    <span>{children}</span>
                </div>
            </div>         
        </>
    , rootModal)
}