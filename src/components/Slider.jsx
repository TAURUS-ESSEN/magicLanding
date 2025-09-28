export default function Slider({t}) {
        // const peoples = [{id:1, name: t.}]
    const peoples = t("successStories.students")
    console.log(peoples);
    return (
        <>

            <div className="mt-[50px] flex justify-between text-[40px]">
                <div>
                    <h2>{t("successStories.title")}</h2>
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
                            <div className="flex shrink-0 flex-col bg-dots bg-[length:12px_12px] text-white shadow-soft rounded-xl w-[360px]">
                                <div><img src={student.img} className="rounded-xl w-[360px] h-[307px] object-cover"/></div>
                                <div className="p-4 display flex flex-col gap-3">
                                    <div className="text-xl font-medium">{student.name}</div>
                                    <div className="flex flex-col">
                                        <div>{student.before}</div>
                                        <div>{student.after}</div>
                                    </div>
                                    <div className="bg-white text-black p-4 h-25 rounded-xl text-sm">{student.quote}</div>
                                    <button className="btn bg-orange w-30">mehr Info</button>
                                </div>
                            </div>
                    )
                    })}
                </div>
            </div>
        </>
    )
}