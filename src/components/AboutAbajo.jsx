import { VisualStudio } from "../../icons/Logos"


export const AboutAbajo = () => {
  return (
    <div className="col-start-2 flex justify-center items-center gap-4 border-l-2 
    border-t-2 border-black px-20">

      <div className="border">
        <VisualStudio />
      </div>

      <div className=" border space-y-5">
        <div className="text-4xl font-semibold">
          Desarrollador
        </div>
        <div>
          Empeze desarrollando con html, css Y javacript. Ahora sigo creciendo en
          mi aprendisaje con tecnologias nuevas y facinantes.
        </div>
      </div>

    </div>
  )
}
