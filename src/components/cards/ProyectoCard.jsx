import { Icon } from "../../icon/Icon"


export const ProyectoCard = () => {

    return (
        <section className="w-[90%] justify-self-center py-3 rounded-3xl px-2 shadow-2xl shadow-yellow-600/10 bg-[#202020]  border border-black/70">
            <div id="titulo_descripcion" className="flex">
            <img src="/netim2.ico" className="w-[100px]" alt="" />
                <div className="pl-2">
                <h1 className="text-xl text-gray-300">Netim2</h1>
                <a target="_blank" href="https://frontend-netin2.vercel.app/" className="hover:text-blue-400 text-blue-300">Link de la página</a>
                <p className="text-sm text-gray-300">Es un videojuego de navegador basado en turnos, inspirado en un MMORPG, con logins, CRUDs, validaciones con una base de datos, compra y venta de objetos, progresión de personajes, bastante entretenido.</p>
                </div>
            </div>
            <div id="tecnologias"> 
                <h2 className="px-3 my-2 text-gray-300">Principales tecnologias usadas en el proyecto:</h2>
                <div className="flex gap-2 px-3">
                <Icon bg={"bg-gray-300/50"} img={"/express.svg"} title={"ExpressJs"} />
                <Icon bg={"bg-emerald-600/50"} img={"/nodejs.svg"} title={"NodeJs"} />
                <Icon bg={"bg-green-300/50"} img={"/mongodb.svg"} title={"MongoDB"} />
                <Icon bg={"bg-blue-300/50"} img={"/react.svg"} title={"ReactJs"} />
                <Icon bg={"bg-sky-300/50"} img={"/tailwind-css.svg"} title={"Tailwind"} />
                <Icon bg={"bg-orange-300/50"} img={"/git.svg"} title={"Git"} />
                <Icon bg={"bg-gray-300/50"} img={"/github.svg"} title={"GitHub"} />
                </div>
            </div>
        </section>
    )
}