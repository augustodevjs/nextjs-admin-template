import { Title } from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  )
}