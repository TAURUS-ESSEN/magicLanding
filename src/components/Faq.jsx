import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export default function Faq({t}) {
    return (
        <div>
            <h2 className="h2">{t("faq.title")}</h2>
            <div>
                <details className="details">
                    <summary className="summary">
                        {t("faq.q1")}
                        <span>
                            <FontAwesomeIcon icon={faSquarePlus} size="xl" style={{color: "#f89000",}} />
                        </span>
                    </summary>
                        {t("faq.a1")}
                </details>

            </div>
        </div>
    )
}