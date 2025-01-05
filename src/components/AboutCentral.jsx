
export const AboutCentral = () => {
  return (
    <div className="row-span-2 flex justify-center items-start flex-col rounded-2xl 
    bg-[#fbf9f8] mx-4 md:ml-8 md:my-8 md:mr-5 shadow-xl">

      <div className="px-4  md:pl-20 md:pr-28">
        <h1 className="text-4xl md:text-7xl font-bold md:mb-10">Sobre Mi</h1>
        <div className="text-base md:text-xl space-y-3 md:space-y-5">
          <p>
            Me llamo Jean Pool. Empecé diseñando páginas web en blanco y negro,
            ahora <span className="bg-[#dac8bd] font-semibold">creo interfaces intuitivas y
              funcionales</span>, permitiéndome resolver
            problemas de <span className="bg-[#dac8bd] font-semibold">forma elegante y
              eficiente.</span>
          </p>

          <p>
            Me di cuenta que <span className="bg-[#dac8bd] font-semibold">lo mejor no tenia que tener mucho, sino lo necesario</span>
            y que los pequeños detalles sí importan
          </p>

          <p className="font-semibold text-xl md:text-2xl">
            {'"' + 'Tienes confianza, no es confianza, es experiencia.' + '"'}</p>
        </div>
      </div>
    </div>
  )
}
