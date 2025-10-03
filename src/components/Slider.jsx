import { useState, useEffect } from 'react';

export default function Slider({t}) {
    const [index, setIndex] = useState(0);
    const peoples = t("successStories.students") ?? [];
    const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);

    
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e) => { setIsDesktop(e.matches); setIndex(0); };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const CARD_WIDTH = isDesktop ? 360 : 280;
    const GAP = 20; 
    const STEP = CARD_WIDTH + GAP;
    const VISIBLE = isDesktop ? 3 : 1;

    let disableLeft = true;
    let disableRight = false;
    disableLeft =  index >= (peoples.length - VISIBLE) ;
    disableRight = index === 0;

    return (
        <section className="section">
            <div className="flex justify-between">
                <div>
                    <h2 className="h2">{t("successStories.title")}</h2>
                </div>
                <div className='flex gap-2'>
                    <button onClick={() => setIndex(prev => prev + 1)} disabled={disableLeft} className='bg-orange p-4 my-2 disabled:text-white'>left</button>
                    <button onClick={() => setIndex(prev => prev - 1)} disabled={disableRight} className='bg-orange p-4 my-2 disabled:text-white'>right</button>
                </div>
            </div>
            <div className="mt-[10px] w-[1140px] overflow-hidden p-2 ">
        
                <div className="flex gap-5 transition-transform duration-300 ease-out" style={{transform: `translateX(-${index * STEP}px)`,
          }}>
                    {peoples.map((student, i)=> {
                        return (
                            <div key={i} className="flex shrink-0 flex-col bg-dots text-white shadow-soft rounded-xl w-[360px]">
                                <div><img src={student.img} className="rounded-xl w-[360px] h-[307px] object-cover"/></div>
                                <div className="p-4 display flex flex-col gap-3">
                                    <h3 className="h3">{student.name}</h3>
                                    <ul className="flex flex-col">
                                        <li>{student.before}</li>
                                        <li>{student.after}</li>
                                    </ul>
                                    <blockquote className="bg-white text-black p-4 h-25 rounded-xl text-sm">{student.quote}</blockquote>
                                    <button className="btn bg-orange hover:bg-orange-500 w-30 text-base">{student.button}</button>
                                </div>
                            </div>
                    )
                    })}
                </div>
            </div>
        </section>
    )
}