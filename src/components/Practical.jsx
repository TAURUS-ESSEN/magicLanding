export default function Practical({ t }) {
    return (
        <section className="section reveal">
        <h2 className="h2">{t('practical.title')}</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-5">
            <div className="orangeBlock orange-gradient md:flex-col">
            <img src="go.webp" className="w-[60px] md:w-[90px]" />
            {t('practical.cardsTop.card1')}
            </div>
            <div className="blackBlock bg-dots text-center md:flex-col">
            <img src="sled.webp" className="w-[60px] md:w-[90px]" />
            {t('practical.cardsTop.card2')}
            </div>
            <div className="orangeBlock orange-gradient md:flex-col">
            <img src="team.webp" className="w-[60px] md:w-[90px]" />
            {t('practical.cardsTop.card3')}
            </div>
        </div>
        <h3 className="h3 my-2 md:my-5">{t('practical.subtitle')}</h3>
        <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="blackBlock bg-dots col-span-1 flex-col items-center justify-start text-center md:flex-row">
            <img src="laggage.webp" className="w-[60px] md:w-[90px]" />
            {t('practical.cardsBottom.card1')}
            </div>
            <div className="blackBlock bg-dots flex-col justify-start text-center md:flex-row">
            <img src="laptop.webp" className="w-[60px] md:w-[90px]" />
            {t('practical.cardsBottom.card2')}
            </div>
        </div>
        </section>
    );
}
