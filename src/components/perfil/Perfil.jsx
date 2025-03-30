import { ProyectoCard } from "../cards/ProyectoCard"

export const Perfil = () => {
    return (
        <section>
            <div className="flex pt-[3rem]">
                <img src="./foto.png" className="h-[240px]" alt="Foto_Perfil" />
                <div className=" w-full mt-6 pl-[3rem] ">
                <h1 className="text-4xl font-light text-[#FFFFFF] self-center">Franco Miralles</h1>
                <h3 className="text-[#FFD700] mt-2 text-2xl">Desarrollador Backend y Frontend</h3>
                <p className="text-white mt-3 tracking-wide">Holaa, soy un desarrollador con conocimiento tanto en el frontend como en el backend, especialmente usando Javascript, aunque mi foco es más en en el trabajo del lado del servidor, me encanta aprender y conocer nuevas cosas.</p>
                </div>
            </div>
            <div className="mx-auto w-[100%] ">
                <h1 className="text-gray-200 text-center text-2xl mt-[5rem]">Mis Proyectos</h1>
                <hr className="w-[50%] mt-1 mb-5 mx-auto text-gray-500"/>
                <ProyectoCard />
            </div>
        </section>
    )
}