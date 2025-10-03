import { useState, useEffect } from "react";

export default function Timer({t}) {
    const [timeLeft, setTimeLeft] = useState(getTimeToMidnight());

    function getTimeToMidnight() {
        const now = new Date();
        const tomorrow = new Date();
        tomorrow.setHours(24, 0, 0, 0);  
        const diff = tomorrow - now;
        return diff;
    }

    useEffect(() => {
        const timer = setInterval(() => {
        const diff = getTimeToMidnight();
        setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    const hours = String(Math.floor(timeLeft / 1000 / 60 / 60)).padStart(2, "0");
    const minutes = String(Math.floor(timeLeft / 1000 / 60) % 60).padStart(2, "0");
    const seconds = String(Math.floor(timeLeft / 1000) % 60).padStart(2, "0");

    return (
            <div className="bg-whitedots rounded-xl p-4 text-center shadow-leicht ">
                <h3 className="h3">{t("timer.headline")} <span className="text-orange font-medium"> {t("timer.discount")}</span></h3>
                <div className="text-center font-medium text-orange text-5xl py-4">{hours}:{minutes}:{seconds}</div>
                <span>{t("timer.pitch")}</span>
            </div>
    )
}