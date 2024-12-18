import { Figma } from "../../icons/Logos"


export const AboutArriba = () => {
  return (
    <div className="flex items-center justify-center px-20 gap-4 border-l-2
     border-black border-b-2">

      <div className="border">
        <Figma />
      </div>

      <div className=" border space-y-5">
        <div className="text-4xl font-semibold">
          Diseñador UI/UX
        </div>
        <div>
          Apasionado por crear experiencias digitales intuitivas y visualmente
          atractivas. Mi enfoque está en la simplicidad, la funcionalidad y el
          diseño centrado en el usuario para resolver problemas de manera efectiva.
        </div>
      </div>

    </div>
  )
}
