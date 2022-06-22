import { useAuth } from "../../hook/useAuth";
import { belIcon, homeIcon, logoutIcon, settingsIcon } from "../icons";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col dark:bg-gray-900 bg-gray-200 text-gray-700">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icon={homeIcon} url="/" text="Início" />
        <MenuItem icon={settingsIcon} url="/ajustes" text="Ajustes" />
        <MenuItem icon={belIcon} url="/notificacoes" text="Notificações" />
      </ul>
      <ul >
        <MenuItem
          icon={logoutIcon}
          text="Sair"
          onClick={logout}
          className={`text-red-600 dark:text-red-400 hover:bg-red-700 dark:hover:bg-red-800 hover:text-white dark:hover:text-white transition delay-75 ease-linear `}
        />
      </ul>
    </aside >
  )
}