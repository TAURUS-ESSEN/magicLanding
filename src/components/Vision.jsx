export default function Vision({ t }) {
    return (
        <section className="section bg-vision -mx-4 md:-mx-8">
        <div className="flex flex-col items-end justify-evenly gap-4 p-6 md:h-[900px] md:p-10">
            <article className="bg-whitedots visionCard">
            <h3 className="h3 text-2xl font-semibold">{t('mission.title')}</h3>
            <p>
                {t('mission.textBefore')}
                <span className="text-orange">{t('mission.slogan')}</span>
                {t('mission.textAfter')}
            </p>
            </article>
            <article className="bg-dots visionCard text-white">
            <h3 className="h3 text-orange text-2xl font-semibold">{t('vision.title')}</h3>
            <div>
                <p>
                {t('vision.textBefore')}
                <span className="text-orange">{t('vision.slogan')}</span>
                {t('vision.textAfter')}
                </p>
            </div>
            <div>{t('vision.text')}</div>
            <div>{t('vision.text2')}</div>
            </article>
        </div>
        </section>
    );
}
