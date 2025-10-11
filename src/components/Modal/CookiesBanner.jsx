import Modal from "./Modal";
import styles from "./modal.module.css"

export default function CookiesBanner({t,closeModal}) {


    return (
        <>
            <Modal title={t("cookies.title")} closeModal={closeModal}  mode='cookies'>
                <div className="flex flex-col gap-4 p-4">
                    {t("cookies.text")}
                    <div className={styles.coockiesButtons}>
                        <button className="btn bg-white text-black" onClick={() => { localStorage.setItem('consent','denied'); closeModal()}}>
                            {t("cookies.button1")}
                        </button> 
                        <button className="btn bg-white text-black" onClick={() => { localStorage.setItem('consent','accepted'); closeModal() }}>{t("cookies.button2")}</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}