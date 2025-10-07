import { useState } from "react";
import { Link } from "react-router-dom"

export default function Form({t}) {
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [status, setStatus] = useState(null); 

    const [valid, setValid] = useState({ vOk: false, nOk: false, eOk: false });
    const [touched, setTouched] = useState({ vInput: false, nInput: false, eInput: false });


    const nameRegex = /[a-z]{2,}/i;
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "border-3 border-red-500"

    function checkVorname(value) {
        setValid(prev => ({...prev, vOk: nameRegex.test(value.trim())}))
        setTouched(prev => ({ ...prev, vInput: true }));
    }

    function checkNachname(value) {
        setValid(prev => ({...prev, nOk: nameRegex.test(value.trim())}))
        setTouched(prev => ({ ...prev, nInput: true }));
    }

    function checkEmail(value) {
        setValid(prev => ({...prev, eOk: emailRx.test(value.trim())}))
        setTouched(prev => ({ ...prev, eInput: true }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (valid.some(value => value === false)) return


        const formData = new FormData(e.target);
        formData.append("access_key", "beb38d09-ba72-4201-be49-6dc03fc83a58"); 

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
    
    return (
        <div className="formContainer bg-dots">
                <span className="text-lg md:text-3xl"> 
                    {t("ctaForm.titleRich.before")}{" "}<span className="text-orange">{t("ctaForm.titleRich.kostenlose")} </span>{" "} {t("ctaForm.titleRich.after")}
                </span>
                    <form className="flex flex-col gap-2 " onSubmit={(e)=>onSubmit(e)}>
                        <input type="text"
                            onChange={(e)=>setVorname(e.target.value)} 
                            name="vorname" 
                            placeholder={t("ctaForm.fields.firstName")} 
                            value={vorname} 
                            onBlur={(e) => checkVorname(e.target.value)}
                            className={touched.vInput && !valid.vOk ? error : ""}
                            required/> 
                            
                        <input type="text"  
                            onChange={(e)=>setNachname(e.target.value)} 
                            name="nachname" 
                            placeholder={t("ctaForm.fields.lastName")}
                            value={nachname} 
                            onBlur={(e) => checkNachname(e.target.value)}
                            className={touched.nInput && !valid.nOk ? error : ""}
                            required
                        
                        />
                        <input type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            name="email" 
                            placeholder="E-mail" 
                            value={email} 
                            onBlur={(e) => checkEmail(e.target.value)}
                            className={touched.eInput && !valid.eOk ? error : ""}
                            required/>

                        <input type="text" name="tel" placeholder={t("ctaForm.fields.phone")}/>
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
                        <button type="submit" className="btn bg-orange ">{t("ctaForm.submit")}</button>
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