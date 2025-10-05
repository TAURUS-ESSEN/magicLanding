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
            <div className="timer bg-whitedots ">
                <h3 className="h3">{t("timer.headline")} 
                    <span className="text-orange font-semibold ml-1"> 
                        {t("timer.discount")}
                    </span>
                </h3>
                <div>{hours}:{minutes}:{seconds}</div>
                <span>{t("timer.pitch")}</span>
            </div>
    )
}