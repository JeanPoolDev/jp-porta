import { AboutAbajo } from "./components/AboutAbajo";
import { AboutArriba } from "./components/AboutArriba";
import { AboutCentral } from "./components/AboutCentral";
import { HomeCentral } from "./components/HomeCentral";
import { HomeDerecha } from "./components/HomeDerecha";
import { HomeIzquierda } from "./components/HomeIzquierda";
import { ProyectosDerecha } from "./components/proyects/ProyectosDerecha";
import { ProyectosIzquierda } from "./components/proyects/ProyectosIzquierda";

const Portafolio = () => {
  return (
    <>

      <header>

      </header>

      <section className="w-full h-full md:h-screen flex flex-col md:flex-row">
        <HomeIzquierda />
        <HomeCentral />
        <HomeDerecha />
      </section>

      <section className="w-full h-full md:h-screen flex">
        <div className="w-0 md:w-1/12">
        </div>

        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 w-full gap-4 md:gap-0">
          <AboutCentral />
          <AboutArriba />
          <AboutAbajo />
        </div>
      </section>

      <section className="w-full h-full md:h-screen flex">
        <div className="w-0 md:w-1/12">
        </div>

        <div className="w-full h-full flex">
          <ProyectosIzquierda />
          <ProyectosDerecha />
        </div>
      </section>


      <footer>

      </footer>

    </>
  )
}

export default Portafolio;
