import { belIcon, homeIcon, logoutIcon, settingsIcon } from "../icons";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";

export function Sidebar() {
  return (
    <aside className="flex flex-col ">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icon={homeIcon} url="/" text="Início" />
        <MenuItem icon={settingsIcon} url="/ajustes" text="Ajustes" />
        <MenuItem icon={belIcon} url="/notificacoes" text="Notificações" />
      </ul>
      <ul >
        <MenuItem icon={logoutIcon} text="Sair" onClick={() => alert('Logout')} className={`text-red-600 hover:bg-red-700 hover:text-white transition delay-75 ease-linear `} />
      </ul>
    </aside >
  )
}