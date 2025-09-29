import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer({t}) {
    return (
        <div className="text-white bg-dots px-10 py-5 text-lg flex flex-col gap-4" id="contact">
            <div className="flex gap-10 border-b-1"> 
                <div>
                    <span className="relative -top-4 col-span-2">
                        <img src='./images/logo.webp' />
                    </span>
                </div>
                <div className="w-full flex justify-between gap-10 py-4 px-6">
                    <div className="col-span-1 flex flex-col gap-2">
                        <div>{t("footer.contactsTitle")}</div>
                        <div>{t("footer.phone")}</div>
                        <div>{t("footer.email")}</div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                        <div>{t("footer.menu.programs")}</div>
                        <div>{t("footer.menu.payments")}</div>
                        <div>{t("footer.menu.about")}</div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2
                    ">
                        <div><Link to="impressum">{t("footer.menu.imprint")}</Link></div>
                        <div><Link to="privacy_policy">{t("footer.menu.privacy")}</Link></div>
                        <div>{t("footer.menu.mission")}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#ffffff",}} />
            </div>
             <div className="flex justify-center">
                    {t("footer.copyright")}
                </div>
        </div>
    )
}