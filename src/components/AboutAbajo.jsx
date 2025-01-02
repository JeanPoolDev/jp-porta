import { VisualStudio } from "../../icons/Logos"


export const AboutAbajo = () => {
  return (
    <div className="col-start-2 flex justify-center items-center gap-4 
     px-20 rounded-2xl bg-[#fbf9f8] mr-8 mb-8 mt-4 shadow-xl">

      <div>
        <VisualStudio />
      </div>

      <div className="space-y-5">
        <div className="text-5xl font-semibold">
          <span className="desarrollador">Desarrollador</span>
        </div>
        <div className="text-lg">
          Empecé desarrollando con Html, Css y JavaScript. Ahora sigo creciendo en mi aprendizaje con tecnologias nuevas y fascinantes.
        </div>
      </div>

    </div>
  )
}
