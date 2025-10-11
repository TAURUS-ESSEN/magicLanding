import Modal from "./Modal"
import Form from '../Form'

export default function RegistrationForm({t,closeModal}) {
    return (
        <>
            <Modal title='Anmeldung' closeModal={closeModal}>
                <Form t={t} modal={'modal'}/>
            </Modal>
        </>
    )
}