import styles from './modal.module.css';
import { useEffect } from 'react';
import {createPortal} from 'react-dom';

export default function Modal({title, children, closeModal}) {
    const rootModal = document.getElementById('root-modal');

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
            <div className={styles.modalCookiesOverlay} onClick={(e)=> {e.currentTarget === e.target && closeModal()}}>
                <div className={styles.modalCookiesContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>{title}</h3>
                        <hr />
                    </div>
                    <span>{children}</span>
                </div>
            </div>         
        </>
    , rootModal)
}