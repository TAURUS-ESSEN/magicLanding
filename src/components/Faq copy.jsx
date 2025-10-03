import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';

export default function Faq({t}) {
    return (
        <section className='section'>
        <h2 className="h2">{t("faq.title")}</h2>
        <div>
            {t("faq.questions").map(question => (
                
            ))}
            <details className="details">
            <summary className="summary flex justify-between items-center cursor-pointer">
                <span>{t("faq.q1")}</span>
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
            <div>{t("faq.a1")}</div>
            </details>
        </div>
        </section>
    )
    }
