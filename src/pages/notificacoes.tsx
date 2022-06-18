import { Layout } from "../components/template/Layout";
import { useData } from "../data/hook/useData";

export default function Notificacoes() {
  const context = useData();

  return (
    <div>
      <Layout
        title="Notificações"
        subtitle="Aqui você irá gerenciar suas notificações!"
      >
        <button onClick={context.changeTheme}>Alternar Tema</button>
      </Layout>
    </div>
  )
}