import { Facebook, Github, Linkeding } from "../../icons/Logos"

const redes = [
  {
    nombre: 'Facebook',
    link: 'https://www.facebook.com/?locale=es_LA',
    icon: <Facebook />
  },
  {
    nombre: 'Github',
    link: 'https://github.com/',
    icon: <Github />
  },
  {
    nombre: 'Linkeding',
    link: 'https://www.linkedin.com/in/jean-pool-rojas-avila-70535b251/',
    icon: <Linkeding />
  },
]


export const HomeDerecha = () => {
  return (
    <section className="md:w-2/4 h-[350px] md:h-full flex text-white 
    md:p-0 mb-10 md:mb-0 miCara mx-4 md:mx-0 rounded-xl md:rounded-none relative">

      <div className="flex gap-3 md:gap-5 absolute -bottom-5 -translate-x-1/2 left-1/2 md:translate-x-0 md:bottom-10 md:right-5 ">
        {
          redes.map(rede => (
            <div
              key={rede.nombre}
              className="w-20 h-20 flex items-center justify-center 
              hover:bg-black transition-colors shadow-xl">
              <a
                href={rede.link}>
                {rede.icon}
              </a>
            </div>
          ))
        }
      </div>
    </section >
  )
}


