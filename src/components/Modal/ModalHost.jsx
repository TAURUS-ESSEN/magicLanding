import CookiesBanner  from "./CookiesBanner";
import RegistrationForm from "./RegistrationForm";
export default function ModalHost({closeModal, modal}) {
        console.log(modal)
    switch (modal.type) {
            case 'cookies':
                return <CookiesBanner closeModal={closeModal}/>            
            case 'registration':
                return <RegistrationForm closeModal={closeModal} />
            default:
                break;
        }
    return 
}