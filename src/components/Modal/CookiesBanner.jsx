import Modal from "./Modal";
import styles from "./modal.module.css"

export default function CookiesBanner({closeModal}) {


    return (
        <>
            <Modal title='Cookies & Datenschutz' closeModal={closeModal}>
                <div>
                    Wir verwenden Cookies, um unsere Website zu verbessern. Sie können nur notwendige Cookies akzeptieren oder alle akzeptieren. Mehr in der Datenschutzerklärung
                    <div className={styles.coockiesButtons}>
                        <button onClick={() => { localStorage.setItem('consent','denied'); closeModal()}}>
                            Nur notwendige akzeptieren
                        </button> 
                        <button onClick={() => { localStorage.setItem('consent','accepted'); closeModal() }}>Alle akzeptieren</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}