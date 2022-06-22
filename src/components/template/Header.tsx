import { useData } from "../../hook/useData";
import { AvatarUser } from "./AvatarUser";
import { ChangeTheme } from "./ChangeTheme";
import { Title } from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { changeTheme, theme } = useData();

  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ChangeTheme theme={theme} changeTheme={changeTheme} />
        <AvatarUser className="ml-3" />
      </div>
    </div>
  )
}