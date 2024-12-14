import { HomeCentral } from "./components/HomeCentral";
import { HomeDerecha } from "./components/HomeDerecha";

const Portafolio = () => {
  return (
    <>

      <header>

      </header>

      <section className="bg-red-300 w-screen h-screen flex">
        <div className="w-1/12 border">parte lateral</div>
        <HomeCentral />
        <HomeDerecha />
      </section>

      <footer>

      </footer>

    </>
  )
}

export default Portafolio;
