import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer({t}) {
    return (
        <footer className="bg-dots" id="contact">
            <div className="flex gap-10"> 
                <div>
                    <span className="relative -top-4 col-span-2">
                        <img src='./images/logo.webp' />
                    </span>
                </div>
                <div className="w-full flex justify-evenly gap-10 py-4 px-6">
                    <div className="col-span-1 flex flex-col gap-2 text-orange">
                        <div>{t("footer.contactsTitle")}</div>
                        <div>{t("footer.phone")}</div>
                        <div>{t("footer.email")}</div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                        <div><a href="#programs">{t("footer.menu.programs")}</a></div>
                        <div><a href="#payments">{t("footer.menu.payments")}</a></div>
                        <div><Link to="/about">{t("footer.menu.about")}</Link></div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center gap-2">
                <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href="https://wa.me" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href="https://youtube.com/" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#ffffff",}} />
                </a>
            </div>
                <div className="col-span-1 flex justify-center gap-8  border-b-1 pb-2">
                        <div><Link to="impressum">{t("footer.menu.imprint")}</Link></div>
                        <div><Link to="privacy_policy">{t("footer.menu.privacy")}</Link></div>
                        <div><Link to="agb">{t("footer.menu.agb")}</Link></div>
                    </div>
             <div className="flex justify-center">
                    {t("footer.copyrightBefore")}
                    <span className="text-orange mx-1"> {t("footer.brandName")}</span>
                    {t("footer.copyrightAfter")}
                </div>
        </footer>
    )
}