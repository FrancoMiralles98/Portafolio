
export const ProyectoCard = ({children,icon,title,description,link}) => {

    return (
        <section className="w-[90%] justify-self-center py-3 rounded-3xl px-2 shadow-2xl shadow-yellow-600/10 bg-[#202020]  border border-black/70">
            <div id="titulo_descripcion" className="flex">
                <img src={icon} className="w-[100px]" alt="" />
                <div className="pl-2">
                    <h1 className="text-xl text-gray-300">{title}</h1>
                    <a target="_blank" href={link} className="hover:text-blue-400 text-blue-300">Link de la página</a>
                    <p className="text-sm text-gray-300">{description}</p>
                </div>
            </div>
            <div id="tecnologias" >
                <h2 className="px-3 my-2 text-gray-300">Principales tecnologias usadas en el proyecto:</h2>
                <div className="flex gap-2 px-3 flex-wrap">
                    {
                        children
                    }
                </div>
            </div>
        </section>
    )
}