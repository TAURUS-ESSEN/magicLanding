import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Form({t}) {
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

        // setErrorMessage(vOk && nOk ? '' : 'Vorname und Nachname - min 2 symbols');
        setErrorMessage(vOk && nOk ? '' : 'border-orange');
        setErrorEmailMessage(eOk ? '' : 'Email nicht korrekt');
        setErrorDatenSchutz(checkbox ? '' : 'Bitte Datenschutz zustimmen')

        setCanClick(vOk && nOk && eOk && checkbox? true : false);
    }, [vorname, nachname, email, checkbox])

    return (
        <div className="blackcard bg-dots px-14 py-8 gap-[20px]">
                {/* <div dangerouslySetInnerHTML={{ __html: t("ctaForm.titleRich") }} className="text-3xl" /> */}
                <span className="text-3xl"> 
                    {t("ctaForm.titleRich.before")}{" "}<span className="text-orange">{t("ctaForm.titleRich.kostenlose")} </span>{" "} {t("ctaForm.titleRich.after")}
                </span>
                    <form className="flex flex-col gap-2 " onSubmit={(e)=>onSubmit(e)}>
                        <input type="text"
                            onChange={(e)=>setVorname(e.target.value)} 
                            name="vorname" 
                            placeholder="Vorname, min 2 symbols" 
                            value={vorname} 
                            className={`${errorMessage}`}
                            required/>
                        <input type="text"  
                            onChange={(e)=>setNachname(e.target.value)} 
                            name="nachname" 
                            placeholder="Nachname, min 2 symbols" 
                            value={nachname} 
                            required
                        
                        />
                        <input type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            name="email" 
                            placeholder="E-mail" 
                            value={email} 
                            required/>

                        <input type="text" name="tel" placeholder="Telefonnummer"/>
                        <span>
                            <input type="checkbox" 
                                onChange={(e)=>setCheckbox(e.target.checked)} 
                                className="border rounded-lg mr-1" 
                                name="datenSchutz" 
                                checked={checkbox}
                                required/> 
                            <span className="">
                                {t("ctaForm.consent.before")}{" "}
                                <Link to="privacy_policy" className="underline">
                                    {t("ctaForm.consent.link")}
                                </Link>{" "}
                                {t("ctaForm.consent.after")}
                            </span>
                        </span>
                        {/* {(errorMessage || errorEmailMessage || errorDatenSchutz) && (
                        <div className="flex flex-col text-red-500 p-2 border rounded-lg bg-orange-200">
                            <span>{errorMessage} </span>
                            <span>{errorEmailMessage}</span>
                            <span>{errorDatenSchutz}</span>
                        </div>
                        )} */}
                        <div className="flex justify-center items-center">
                        <button type="submit" className="btn bg-orange " disabled={!canClick}>{t("ctaForm.submit")}</button>
                        {status === "success" && (
                        <div className="text-green-600 mt-2">✅ Nachricht erfolgreich gesendet!</div>
                        )}
                        {status === "error" && (
                        <div className="text-red-600 mt-2">❌ Fehler beim Senden</div>
)}</div>
                    </form>
                </div>
    )
    
}