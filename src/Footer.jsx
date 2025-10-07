import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer({t}) {
    return (
        <footer className="bg-black" id="contact">
            <div className="flex flex-col md:flex-row md:gap-10"> 
                <div>
                    <span className="relative flex justify-center">   
                        <img src='./images/logo.webp' className="w-30 mb-5"/>
                    </span>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-evenly gap-10 py-4 px-6">
                    <div className="col-span-1 flex flex-col gap-2 text-orange">
                        <div className="">
                            <a href="tel:+491604514509"  className="flex justify-center items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} size="" style={{color: "#F89000",}} /> 
                                {t("footer.phone")}
                            </a>
                        </div>
                        <div>
                            <a href="mailto: reitarovea@gmail.com" className="flex items-center gap-2 justify-center" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} size="" style={{color: "#F89000",}} /> 
                                {t("footer.email")}
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-wrap justify-center sm:flex-col gap-2">
                        <div className="hover:text-orange"><a href="#programs">{t("footer.menu.programs")}</a></div>
                        <div className="hover:text-orange"><a href="#payments">{t("footer.menu.payments")}</a></div>
                        <div className="hover:text-orange"><Link to="/about">{t("footer.menu.about")}</Link></div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 border-b-1  pb-2">
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
                <div className="flex text-sm md:text-base justify-center gap-8 ">
                        <div className="hover:text-orange"><Link to="impressum#start">{t("footer.menu.imprint")}</Link></div>
                        <div className="hover:text-orange"><Link to="privacy_policy#start">{t("footer.menu.privacy")}</Link></div>
                        <div className="hover:text-orange">
                            <Link to="agb#start">{t("footer.menu.agb")}</Link></div>
                    </div>
                </div>
             <div className="flex flex-col md:flex-row text-base md:text-lg justify-center items-center">
                    <span>{t("footer.copyrightBefore")}
                        <span className="text-orange ml-1"> {t("footer.brandName")}</span>.
                    </span>
                    <span className="text-center ml-1">{t("footer.copyrightAfter")}</span>
                </div>
        </footer>
    )
}