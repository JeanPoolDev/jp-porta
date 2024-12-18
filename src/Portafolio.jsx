import { AboutAbajo } from "./components/AboutAbajo";
import { AboutArriba } from "./components/AboutArriba";
import { AboutCentral } from "./components/AboutCentral";
import { HomeCentral } from "./components/HomeCentral";
import { HomeDerecha } from "./components/HomeDerecha";
import { HomeIzquierda } from "./components/HomeIzquierda";

const Portafolio = () => {
  return (
    <>

      <header>

      </header>

      <section className="w-full h-screen flex">
        <HomeIzquierda />
        <HomeCentral />
        <HomeDerecha />
      </section>

      <section className="w-full h-screen flex">
        <div className="w-1/12">
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-full">
          <AboutCentral />
          <AboutArriba />
          <AboutAbajo />
        </div>
      </section>


      <footer>

      </footer>

    </>
  )
}

export default Portafolio;
