import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from "./languageToggler";

export default function NotFound() {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer <= 0) {
        navigate('/');
        return;
        }

        const id = setInterval(() => {
        setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [timer, navigate]);

    return (
        <section className="flex flex-col items-center justify-center h-[50vh] text-center">
        <div>
            <h2 className="text-2xl md:text-6xl font-bold text-orange">404</h2>
            <p className="text-xl mt-4">
            {t("404.textBefore")} <span className='text-orange'>{timer}</span> {t("404.textAfter")} 
            </p>
        </div>
        </section>
    );
}
