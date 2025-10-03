import { useEffect, useState } from "react";
import Modal from "./Modal"
import { Link } from "react-router-dom"
export default function RegistrationForm({closeModal}) {
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [canClick, setCanClick] = useState(false) ; 
    const [errorMessage, setErrorMessage] = useState('');
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorDatenSchutz, setErrorDatenSchutz] = useState('');
    const [status, setStatus] = useState(null); 

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "beb38d09-ba72-4201-be49-6dc03fc83a58"); // твой ключ с Web3Forms

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            });

            const data = await res.json();
            if (data.success) {
            setStatus("success");
            e.target.reset();
            } else {
            setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }
    

    useEffect(()=>{
        const nameRegex = /[a-z]{2,}/i;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const vOk = nameRegex.test(vorname.trim());
        const nOk = nameRegex.test(nachname.trim());
        const eOk = emailRegex.test(email.trim());

        setErrorMessage(vOk && nOk ? '' : 'Vorname und Nachname - min 2 symbols');
        setErrorEmailMessage(eOk ? '' : 'Email nicht korrekt');
        setErrorDatenSchutz(checkbox ? '' : 'Bitte Datenschutz zustimmen')

        setCanClick(vOk && nOk && eOk && checkbox? true : false);
    }, [vorname, nachname, email, checkbox])


    return (
        <>
            <Modal title='Anmeldung' closeModal={closeModal}>
                <div className="flex flex-col max-w-md p-3">
                    <div className="p-2">
                        Melden Sie sich zu einer <span className="text-orange font-medium">kostenlosen Karriereberatung</span> an! 
                        Unsere Experten beantworten Ihnen gerne alle Fragen
                    </div>
                    <form className="flex flex-col gap-2" onSubmit={(e)=>onSubmit(e)}>
                        <input type="text"
                            onChange={(e)=>setVorname(e.target.value)} 
                            className="border p-2 rounded-lg" 
                            name="vorname" 
                            placeholder="Vorname, min 2 symbols" 
                            value={vorname} 
                            required/>
                        <input type="text"  
                            onChange={(e)=>setNachname(e.target.value)} 
                            className="border p-2 rounded-lg" 
                            name="nachname" 
                            placeholder="Nachname, min 2 symbols" 
                            value={nachname} 
                            required
                        
                        />
                        <input type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            className="border p-2 rounded-lg" 
                            name="email" 
                            placeholder="E-mail" 
                            value={email} 
                            required/>

                        <input type="text" className="border p-2 rounded-lg" name="tel" placeholder="Telefonnummer"/>
                        <span>
                            <input type="checkbox" 
                                onChange={(e)=>setCheckbox(e.target.checked)} 
                                className="border p-2 rounded-lg" 
                                name="datenSchutz" 
                                checked={checkbox}
                                required/> 
                            Ich stimme den
                            <Link to="privacy_policy" className="underline"> Datenschutzrichtlinien zu</Link>
                        </span>
                        {(errorMessage || errorEmailMessage || errorDatenSchutz) && (
                        <div className="flex flex-col text-red-500 p-2 border rounded-lg bg-orange-200">
                            <span>{errorMessage} </span>
                            <span>{errorEmailMessage}</span>
                            <span>{errorDatenSchutz}</span>
                        </div>
                        )}
                        <button type="submit" className="btn bg-orange w-50 font-medium" disabled={!canClick}>TERMIN VEREINBAREN</button>
                        {status === "success" && (
                        <div className="text-green-600 mt-2">✅ Nachricht erfolgreich gesendet!</div>
                        )}
                        {status === "error" && (
                        <div className="text-red-600 mt-2">❌ Fehler beim Senden</div>
)}
                    </form>
                </div>
            </Modal>
        </>
    )
}