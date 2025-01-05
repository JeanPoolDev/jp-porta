import { VisualStudio } from "../../icons/Logos"


export const AboutAbajo = () => {
  return (
    <div className="col-start-1 md:col-start-2 flex justify-center items-center gap-4 
     md:px-20 p-4 rounded-2xl bg-[#fbf9f8] mx-4 md:mr-8 md:mb-8 md:mt-4 shadow-xl">

      <div className="hidden md:block">
        <VisualStudio />
      </div>

      <div className="space-y-1 md:space-y-5">
        <div className="text-2xl md:text-3xl font-semibold">
          <span className="desarrollador">Desarrollador</span>
        </div>
        <div className="text-base md:text-lg">
          Empecé desarrollando con Html, Css y JavaScript. Ahora sigo creciendo en mi aprendizaje con tecnologias nuevas y fascinantes.
        </div>
      </div>

    </div>
  )
}
