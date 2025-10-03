import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


export default function Faq({t}) {

    
    useEffect(() => {
    const items = document.querySelectorAll('.details');
    function onToggle(e){
        if(e.target.open){
        items.forEach(d => d !== e.target && d.removeAttribute('open'));
        }
    }
    items.forEach(d => d.addEventListener('toggle', onToggle));
    return () => items.forEach(d => d.removeEventListener('toggle', onToggle));
    }, []);

    return (
        <section className='section'>
        <h2 className="h2">{t("faq.title")}</h2>
        <div>
            {t("faq.questions").map(question => (
            <details className="details">
                <summary className="summary flex justify-between items-center text-xl font-medium cursor-pointer">
                    <span>{question.q}</span>
                    <span>
                    <FontAwesomeIcon
                        icon={faSquarePlus} 
                        size="xl"
                        style={{color: "#f89000"}}
                        className="closed-icon"
                    />
                    <FontAwesomeIcon
                        icon={faSquareMinus}
                        size="xl"
                        style={{color: "#f89000"}}
                        className="open-icon hidden"
                    />
                    </span>
                </summary>
                <div className='px-8 pt-4 text-base'>
                    <span className='font-semibold'>A:</span> {question.a}
                </div>
            </details>
            ))}
            
        </div>
        </section>
    )
    }
