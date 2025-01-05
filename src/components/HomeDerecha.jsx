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
    <section className="w-full md:w-2/4 h-2/4 md:h-full flex text-white p-5 md:p-0">
      <img className="bg-cover md:min-w-full w-full rounded-xl md:rounded-none"
        src="/miCara.jpg" alt="jp" />

      <div className="flex gap-5 absolute bottom-10 right-14 md:bottom-10 md:right-12 ">
        {
          redes.map(rede => (
            <div
              key={rede.nombre}
              className="w-20 h-20 flex items-center justify-center 
              hover:bg-black transition-colors">
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
