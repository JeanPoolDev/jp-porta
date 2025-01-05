import { Icono3d1, Icono3d2 } from "../../../icons/Logos";

export function ProyectosDerecha() {
  return (
    <div className="w-2/4 h-full mx-9 relative flex items-center justify-center">
      <div className="rounded-xl shadow-xl w-[500px] h-[300px] bg-[#F5F0ED] absolute z-30 
      -translate-x-10 -translate-y-10">
        <a href="https://todo-anime.vercel.app/" target="_blank">
          <img src="/buscador.png" alt="buscador de animes" className="rounded-xl bg-cover w-full h-full" />
        </a>
      </div>
      <div className="rounded-xl shadow-xl w-[150px] h-[280px] bg-[#F5F0ED] absolute z-40
      translate-x-48 translate-y-8">
        <a href="https://todo-anime.vercel.app/" target="_blank">
          <img src="/buscador-movil.png" alt="buscador de amimes en movil" className="rounded-xl bg-cover w-full h-full" />
        </a>
      </div>
      <div className="rounded-xl shadow-xl w-[500px] h-[380px] bg-[#C7A8E6] absolute z-20
      translate-x-10 -translate-y-12"></div>
      <div className="rounded-xl shadow-xl w-[410px] h-[300px] bg-[#8AABED] absolute z-10
      -translate-x-28 translate-y-10"></div>

      <div className="translate-x-80 -translate-y-64 z-20 mover">
        <Icono3d1 />
      </div>

      <div className="-translate-x-64 translate-y-48 z-20 mover">
        <Icono3d2 />
      </div>
    </div>
  )
}
