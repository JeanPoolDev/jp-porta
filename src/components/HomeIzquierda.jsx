import { Menu } from "../../icons/Logos"

export const HomeIzquierda = () => {
  return (
    <div className="md:w-1/12">
      <section className="md:w-1/12 flex md:flex-col md:h-full h-[80px] rounded-lg md:rounded-none justify-between p-8 shadow-xl md:fixed bg-[#F5F0ED] m-3 md:m-0">
        <a href="#" className="flex items-center justify-center">
          <img
            className="w-12 h-12 rounded-full bg-black object-cover"
            src="/miCara.jpg" alt="logo" />
        </a>
        <div className="md:-rotate-90 md:text-nowrap md:text-2xl text-lg flex justify-center items-center px-4 md:px-0 font-semibold">
          Jean Pool @Dev
        </div>
        <a href="#" className="flex items-center">
          <Menu />
        </a>
      </section>
    </div>
  )
}
