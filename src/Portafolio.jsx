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

      </section>


      <footer>

      </footer>

    </>
  )
}

export default Portafolio;
