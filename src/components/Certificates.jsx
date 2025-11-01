import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export default function Certificates({ t, openModal }) {
    return (
        <section className="section reveal">
            <h2 className="h2">{t('certificates.title')}</h2>
            <div className="bg-whitedots -mx-4 flex p-4 md:-mx-8">
                <div className="flex flex-col items-center justify-center gap-8 p-4 lg:flex-row">
                <div className="flex w-full justify-center">
                    <img
                    src="certificate-sm.webp"
                    loading="lazy"
                    alt="Certificate image"
                    width="640"
                    height="452"
                    className="shadow-leicht rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-base leading-relaxed md:pr-6 md:text-xl">
                    {t('certificates.text')}
                    </div>
                    <div className="bg-dots flex flex-col rounded-xl p-4 text-base text-white md:rounded-3xl md:p-8 md:text-xl">
                    <h3>{t('certificates.listTitle')}</h3>
                    <ul className="md:grid md:grid-cols-2">
                        {t('certificates.jobs').map((job, i) => (
                        <li key={i} className="col-span-1 mt-4">
                            <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="text-orange"
                            aria-hidden="true"
                            />{' '}
                            {job}
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <button
                        type="button"
                        className="btn bg-orange shine-btn text-left md:m-0"
                        onClick={() => openModal('registration')}
                    >
                        {t('certificates.button')}
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
