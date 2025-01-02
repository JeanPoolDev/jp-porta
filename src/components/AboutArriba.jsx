import { Figma } from "../../icons/Logos"


export const AboutArriba = () => {
  return (
    <div className="flex items-center justify-center px-20 gap-4 rounded-2xl bg-[#fbf9f8] mt-8 mr-8 mb-4 shadow-xl">

      <div>
        <Figma />
      </div>

      <div className="space-y-5">
        <div className="text-5xl font-semibold">
          <span className="diseñador">Diseñador UI/UX</span>
        </div>
        <div className="text-lg">
          Apasionado por crear experiencias digitales intuitivas y visualmente
          atractivas. Mi enfoque está en la simplicidad, la funcionalidad y el
          diseño centrado en el usuario para resolver problemas de manera efectiva.
        </div>
      </div>

    </div>
  )
}
