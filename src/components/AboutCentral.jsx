
export const AboutCentral = () => {
  return (
    <div className="row-span-2 flex justify-center items-start flex-col rounded-2xl bg-[#fbf9f8] ml-8 my-8 mr-5 shadow-xl">
      <div className="pl-20 pr-28">
        <h1 className="text-7xl font-bold mb-10">Sobre Mi</h1>
        <div className="text-xl space-y-5">
          <p>
            Me llamo Jean Pool empeze diseñando paginas web en blanco y negro,
            ahora <span className="bg-[#dac8bd] font-semibold">creo interfaces intuitivas y
              funcionales</span>, permitiéndome resolver
            problemas de <span className="bg-[#dac8bd] font-semibold">forma elegante y
              eficiente.</span>
          </p>

          <p>
            Me di cuenta que <span className="bg-[#dac8bd] font-semibold">lo mejor no tenia que tener mucho, si no lo necesario</span>
            y que los pequeños detalles si importan
          </p>

          <p className="font-semibold text-2xl">
            {'"' + 'Tienes confianza, no es confianza, es experiencia.' + '"'}</p>
        </div>
      </div>
    </div>
  )
}
