

export const Icon = ({img,bg,title}) => {

    return (

        <div className={`flex gap-0.5 ${bg} px-2 rounded-3xl items-center`}>
            <img src={img} className="w-[20px] h-[30px]" alt="" />
            <p className="text-sm">{title}</p>
        </div>

    )
}