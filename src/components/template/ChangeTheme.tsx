import { moonIcon, sunIcon } from "../icons";

interface ChangeThemeProps {
  theme: string;
  changeTheme: () => void;
}

export function ChangeTheme({ theme, changeTheme }: ChangeThemeProps) {
  return theme === 'dark' ? (
    <div
      onClick={changeTheme}
      className={`bg-gradient-to-r from-yellow-300 to-yellow-400 w-14 lg:w-24 h-8 sm:flex items-center hidden cursor-pointer p-1 rounded-full`}
    >
      <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
        {sunIcon(4)}
      </div>
      <div className={`hidden lg:flex items-center ml-4 text-white`}>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={changeTheme}
      className={`hidden sm:flex items-center justify-end cursor-pointer bg-gradient-to-r from-gray-700 to-gray-800 w-14 lg:w-24 h-8 p-1 rounded-full`}
    >
      <div className={`hidden lg:flex items-center mr-2 text-gray-200`}>
        <span className="text-sm">Escuro</span>
      </div>
      <div className={`flex items-center justify-center bg-gray-900 text-yellow-300 w-6 h-6 rounded-full`}>
        {moonIcon(4)}
      </div>
    </div>
  )
} 