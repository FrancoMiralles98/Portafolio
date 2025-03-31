import { ProyectoCard } from "../cards/ProyectoCard"
import { Icon } from "../../icon/Icon"

export const Perfil = () => {
    return (
        <section>
            <div className="flex pt-[3rem]">
                <div className="w-full mt-6 pl-[3rem] sm:flex  grid">
                    <img src="./foto.png" className="h-[240px]" alt="Foto_Perfil" />
                    <div className="sm:pl-3 lg:mt-4">
                        <h1 className="text-4xl font-light text-[#FFFFFF] self-center">Franco Miralles</h1>
                        <h3 className="text-[#FFD700]  mt-2 text-xl">Desarrollador Backend y Frontend</h3>
                        <p className="text-white mt-3 lg:w-[80%] text-[15px] md:text-[17px] w-[80%] sm:w-[90%] tracking-wide">
                            Holaa, soy un desarrollador con conocimiento tanto en el frontend como en el backend, especialmente usando Javascript,
                            aunque mi foco es más en el trabajo del lado del servidor, me encanta aprender y conocer nuevas cosas.
                        </p>
                    </div>
                </div>
            </div>
            <div id="proyectos" className="mx-auto w-[100%] ">
                <h1 className="text-gray-200 text-center text-2xl mt-[3rem]">Mis Proyectos</h1>
                <hr className="w-[50%] mt-1 mb-5 mx-auto text-gray-500" />
                <section className="grid gap-y-[4rem]">
                <ProyectoCard 
                link={"https://frontend-netin2.vercel.app/"} 
                description={"Es un videojuego de navegador basado en turnos, inspirado en un MMORPG, con logins, CRUDs, validaciones con una base de datos, compra y venta de objetos, progresión de personajes, bastante entretenido."}
                title={"Netim2"}
                icon={"/netim2.ico"}
                >
                    <Icon bg={"bg-gray-300/50"} img={"/express.svg"} title={"ExpressJs"} />
                    <Icon bg={"bg-emerald-600/50"} img={"/nodejs.svg"} title={"NodeJs"} />
                    <Icon bg={"bg-green-300/50"} img={"/mongodb.svg"} title={"MongoDB"} />
                    <Icon bg={"bg-blue-300/50"} img={"/react.svg"} title={"ReactJs"} />
                    <Icon bg={"bg-sky-300/50"} img={"/tailwind-css.svg"} title={"Tailwind"} />
                    <Icon bg={"bg-orange-300/50"} img={"/git.svg"} title={"Git"} />
                    <Icon bg={"bg-gray-300/50"} img={"/github.svg"} title={"GitHub"} />
                </ProyectoCard>
                <ProyectoCard 
                link={"https://frontend-cuerda-lin.vercel.app/"} 
                description={"Es un página ecommerce relacionado a la venta de instrumentos musicales de cuerda y accesorios, con buscador , filtros, historial, favoritos , sistema de login y pasarela de pagos."}
                title={"CuerdaLin"}
                icon={"/Logo_Cuerdalin2.png"}
                >
                    <Icon bg={"bg-gray-300/50"} img={"/express.svg"} title={"ExpressJs"} />
                    <Icon bg={"bg-emerald-600/50"} img={"/nodejs.svg"} title={"NodeJs"} />
                    <Icon bg={"bg-green-300/50"} img={"/mongodb.svg"} title={"MongoDB"} />
                    <Icon bg={"bg-blue-300/50"} img={"/react.svg"} title={"ReactJs"} />
                    <Icon bg={"bg-sky-300/50"} img={"/tailwind-css.svg"} title={"Tailwind"} />
                    <Icon bg={"bg-orange-300/50"} img={"/git.svg"} title={"Git"} />
                    <Icon bg={"bg-gray-300/50"} img={"/github.svg"} title={"GitHub"} />
                </ProyectoCard>
                </section>
            </div>
            <div id="sobre_mi" className="mx-auto w-[100%] ">
                <h1 className="text-gray-200 text-center text-2xl mt-[3rem]">Sobre mi</h1>
                <hr className="w-[50%] mt-1 mb-5 mx-auto text-gray-500" />
            </div>
        </section>
    )
}