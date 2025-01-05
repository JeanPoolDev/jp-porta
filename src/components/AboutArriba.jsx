import { Figma } from "../../icons/Logos"


export const AboutArriba = () => {
  return (
    <div className="flex items-center justify-center md:px-20 gap-4 rounded-2xl 
    bg-[#fbf9f8] mx-4 md:mt-8 md:mr-8 md:mb-4 shadow-xl p-4 md:p-0">

      <div className="hidden md:block">
        <Figma />
      </div>

      {/* 
      <div className="block md:hidden">
        <FigmaMovil />
      </div> */}

      <div className="space-y-1 md:space-y-5">
        <div className="text-2xl md:text-3xl font-semibold">
          <span className="diseñador">Diseñador UI/UX</span>
        </div>
        <div className="text-base md:text-lg">
          Apasionado por crear experiencias digitales intuitivas y visualmente
          atractivas. Mi enfoque está en la simplicidad, la funcionalidad y el
          diseño centrado en el usuario para resolver problemas de manera efectiva.
        </div>
      </div>

    </div>
  )
}
