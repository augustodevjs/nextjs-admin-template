import { useData } from "../../data/hook/useData";
import { ChangeTheme } from "./ChangeTheme";
import { Title } from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const context = useData();

  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-grow justify-end">
        <ChangeTheme theme={context.theme} changeTheme={context.changeTheme} />
      </div>
    </div>
  )
}