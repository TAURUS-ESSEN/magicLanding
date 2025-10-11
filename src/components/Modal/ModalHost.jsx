import CookiesBanner  from "./CookiesBanner";
import RegistrationForm from "./RegistrationForm";
export default function ModalHost({t, closeModal, modal}) {
        console.log(modal)
    switch (modal.type) {
            case 'cookies':
                return <CookiesBanner t={t} closeModal={closeModal}/>            
            case 'registration':
                return <RegistrationForm t={t} closeModal={closeModal} />
            default:
                break;
        }
    return 
}