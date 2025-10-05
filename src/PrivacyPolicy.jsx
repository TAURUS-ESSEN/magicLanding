import { useOutletContext } from "react-router-dom";

export default function PrivacyPolicy() {
    const { t } = useOutletContext() ?? { t: (k) => k };
    const items = t("privacy.items") ?? [];

    return (
        <section className="bg-white text-black px-8 py-12">
        <h2 className="h2 mb-2">{t("privacy.title")}</h2>
        <p className="text-sm mb-8">{t("privacy.stand")}</p>

        <div className="space-y-8 text-lg leading-relaxed">
            {Array.isArray(items) &&
            items.map((it, i) => (
                <div key={i}>
                <h3 className="font-semibold mb-2">
                    {i + 1}. {it.h}
                </h3>
                {Array.isArray(it.p)
                    ? it.p.map((para, idx) => (
                        <p key={idx} className={idx ? "mt-3" : ""}>
                        {para}
                        </p>
                    ))
                    : <p>{it.p}</p>}
                </div>
            ))}
        </div>
        </section>
    );
}
