import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer({t}) {
    return (
        <footer className="bg-dots " id="contact">
            <div className="flex gap-10"> 
                <div>
                    <span className="relative -top-1 col-span-2">   
                        <img src='./images/logo.webp' />
                    </span>
                </div>
                <div className="w-full flex justify-evenly gap-10 py-4 px-6">
                    <div className="col-span-1 flex flex-col gap-2 text-orange">
                        <div className="text-white">{t("footer.contactsTitle")}</div>
                        <div>
                            <a href="tel:+491604514509"  className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} size="" style={{color: "#F89000",}} /> 
                                {t("footer.phone")}
                            </a>
                        </div>
                        <div>
                            <a href="mailto: reitarovea@gmail.com" className="flex items-center gap-2" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} size="" style={{color: "#F89000",}} /> 
                                {t("footer.email")}
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                        <div className="hover:text-orange"><a href="#programs">{t("footer.menu.programs")}</a></div>
                        <div className="hover:text-orange"><a href="#payments">{t("footer.menu.payments")}</a></div>
                        <div className="hover:text-orange"><Link to="/about">{t("footer.menu.about")}</Link></div>
                    </div>

                </div>
            </div>
            <div className="flex justify-end items-center gap-50 border-b-1  pb-2">
                <div className="flex justify-center gap-2 brands">
                    <span>
                        <a href="https://www.facebook.com/" target="_blank" >
                            <FontAwesomeIcon icon={faFacebook} size="2xl"  />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2xl"  />
                        </a>
                    </span>
                    <span>
                        <a href="https://wa.me/491701234567" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} size="2xl"   />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
                        </a>
                    </span>
                    <span>
                        <a href="https://youtube.com/" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2xl"  />
                        </a>
                    </span>
                </div>
                <div className="col-span-1 flex justify-center gap-8 ">
                        <div className="hover:text-orange"><Link to="impressum">{t("footer.menu.imprint")}</Link></div>
                        <div className="hover:text-orange"><Link to="privacy_policy">{t("footer.menu.privacy")}</Link></div>
                        <div className="hover:text-orange">
                            <Link to="agb">{t("footer.menu.agb")}</Link></div>
                    </div>
                </div>
             <div className="flex justify-center">
                    {t("footer.copyrightBefore")}
                    <span className="text-orange mx-1"> {t("footer.brandName")}</span>
                    {t("footer.copyrightAfter")}
                </div>
        </footer>
    )
}