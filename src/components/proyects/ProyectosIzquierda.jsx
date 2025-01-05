

export function ProyectosIzquierda() {
  return (
    <div className="w-2/4 h-full mx-9 flex flex-col justify-center items-start 
    space-y-5 px-20">
      <a href="https://todo-anime.vercel.app/" target="_blank"
        className="text-6xl font-bold text-pretty hover:text-[65px] transition-all ">Buscador de Animes</a>
      <p>El buscador de animes al instante con una búsqueda limpia y rápida.
        Mostrando animes tanto aptos para la familia como +18 :v </p>
      <div className="flex gap-2 items-center">
        <span className="pastillas bg-[#61DAFB] mouse-hover border-2">React</span>
        <span className="pastillas bg-[#FFFF00] hover-j border-2">Javacript</span>
        <span className="pastillas bg-[#3178C6] hover-t text-white border-2">
          tailwindcss</span>
        <span className="pastillas bg-[#264DE4] hover-c text-white border-2">Api</span>
      </div>
    </div>
  )
}
