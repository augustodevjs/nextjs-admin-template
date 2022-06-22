import { useData } from "../../hook/useData";
import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: JSX.Element;
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  const context = useData();

  return (
    <div className={`${context.theme} flex h-screen w-screen`}>
      <Sidebar />
      <div
        className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800"
      >
        <Header title={title} subtitle={subtitle} />
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}