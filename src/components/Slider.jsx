export default function Slider({t}) {
        // const peoples = [{id:1, name: t.}]
    const peoples = t("successStories.students")
    console.log(peoples);
    return (
        <section className="mt-12">
            <div className="flex justify-between">
                <div>
                    <h2 className="h2">{t("successStories.title")}</h2>
                </div>
                <div>
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>
            <div className="mt-[10px] w-[1140px] overflow-hidden p-2 ">
        
                <div className="flex gap-5">
                    {peoples.map(student=> {
                        return (
                            <div className="flex shrink-0 flex-col bg-dots text-white shadow-soft rounded-xl w-[360px]">
                                <div><img src={student.img} className="rounded-xl w-[360px] h-[307px] object-cover"/></div>
                                <div className="p-4 display flex flex-col gap-3">
                                    <h3 className="h3">{student.name}</h3>
                                    <ul className="flex flex-col">
                                        <li>{student.before}</li>
                                        <li>{student.after}</li>
                                    </ul>
                                    <blockquote className="bg-white text-black p-4 h-25 rounded-xl text-sm">{student.quote}</blockquote>
                                    <button className="btn2 bg-orange hover:bg-orange-500 w-30 text-base">{student.button}</button>
                                </div>
                            </div>
                    )
                    })}
                </div>
            </div>
        </section>
    )
}