import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Slider({t}) {
    const [index, setIndex] = useState(0);
    const [flippedIndex, setFlippedIndex] = useState(null);
    const peoples = t("successStories.students") ?? [];

    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
    );

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e) => { setIsDesktop(e.matches); setIndex(0); };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const CARD_WIDTH = isDesktop ? 360 : 330;
    const GAP = 20;
    const STEP = CARD_WIDTH + GAP;
    const VISIBLE = isDesktop ? 3 : 1;

    const maxIndex = Math.max(0, (peoples.length - VISIBLE));
    const disablePrev = index === 0 || peoples.length <= VISIBLE;
    const disableNext = index >= maxIndex || peoples.length <= VISIBLE;

    return (
        <section className="section">
        <div className="flex justify-between">
            <h2 className="h2">{t("successStories.title")}</h2>
            <div className="flex gap-2">
            <button
                onClick={() => setIndex(prev => Math.max(prev - 1, 0))}
                disabled={disablePrev}
                className="sliderToggler"
                aria-label={t("aria.previous")}
            >
                <FontAwesomeIcon icon={faLeftLong} size="sm"/>
            </button>
            <button
                onClick={() => setIndex(prev => Math.min(prev + 1, maxIndex))}
                disabled={disableNext}
                className="sliderToggler"
                aria-label={t("aria.next")}
            >
                <FontAwesomeIcon icon={faRightLong} size="sm"/>
            </button>
            </div>
        </div>

        <div className="md:mt-[10px] w-[340px] md:w-[1140px] m-auto overflow-hidden p-2">
            <div
                className="flex gap-5 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${index * STEP}px)` }}
            >
            { peoples.map((student, i) => {
                const isFlipped = flippedIndex === i;

                return (
                <div
                    key={i}
                    className="relative shrink-0 [perspective:1000px]  "
                    style={{ width: CARD_WIDTH, height: 500 }}
                >
                    <div
                    className={`flip-inner ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                    >
                    {/* FRONT */}
                    <div className="bg-dots flip-front">
                        <img 
                            src={student.img} 
                            alt={student.name} 
                            className="w-full h-[307px] object-cover object-[50%_20%]"
                        />
                        <div className="p-4 flex flex-col gap-5">
                            <h3 className="h3">{student.name}</h3>
                            <ul className="flex flex-col text-sm md:leading-relaxed">
                                <li>{student.before}</li>
                                <li>{student.after}</li>
                            </ul>
                            <button 
                                onClick={() => setFlippedIndex(isFlipped ? null : i)} 
                                className="btn bg-orange hover:bg-orange-500 w-30 text-base">
                                {student.button} 
                            </button>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="flip-back">
                        <div className="flex flex-col gap-3">
                        <h3 className="h3">{student.name}</h3>
                        <blockquote className="bg-white text-black p-4 rounded-xl text-base leading-relaxed ">
                            {student.quote}
                        </blockquote>
                        </div>

                        <div className="flex items-center justify-between">
                        <button onClick={() => setFlippedIndex(isFlipped ? null : i)} className="btn bg-white text-black text-base">
                            {student.cta ?? "Zurück"}
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        </section>
    );
    }
