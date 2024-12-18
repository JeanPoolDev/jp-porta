import { Menu } from "../../icons/Logos"

export const HomeIzquierda = () => {
  return (
    <div className="w-1/12">
      <section className="w-1/12 flex border flex-col h-full justify-between p-10  shadow-xl fixed bg-[#F5F0ED]">
        <a href="#">
          <img
            className="w-16 h-16 rounded-full bg-black object-cover"
            src="/miCara.jpg" alt="logo" />
        </a>
        <div className="-rotate-90 text-nowrap text-2xl flex justify-center">
          Jean Pool @Dev
        </div>
        <a href="#">
          <Menu />
        </a>
      </section>
    </div>
  )
}
