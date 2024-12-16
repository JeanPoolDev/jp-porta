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
    <section className="w-2/4 miCara flex text-white">
      <img className="bg-cover min-w-full" src="/public/miCara.jpg" alt="jp" />

      <div className="absolute bottom-10 right-12 flex gap-5">
        {
          redes.map(rede => (
            <div
              key={rede.nombre}
              className="w-20 h-20 flex items-center justify-center border-2
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
