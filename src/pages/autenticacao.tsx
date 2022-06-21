import { useState } from "react";
import { AuthInput } from "../components/auth/AuthInput";
import { warningIcon } from "../components/icons";
import { useAuth } from "../data/hook/useAuth";

type Mode = 'login' | 'register';

export default function Autenticacao() {
  const { user, loginGoogle } = useAuth();

  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function showError(message: any, timeInSeconds = 5) {
    setError(message)
    setTimeout(() => setError(null), timeInSeconds * 1000);
  }

  function submit() {
    if (mode === 'login') {
      alert('Login')
    } else {
      alert('Cadastrar')
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">

      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img src="https://source.unsplash.com/cPxNce0o_Jk" alt="Imagem da Tela de Autenticação" className="h-screen w-full object-cover" />
      </div>

      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5 `}>
          {mode === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na plataforma'}
        </h1>

        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {warningIcon()}
            <span className="ml-3">{error}</span>
          </div>
        ) : false}

        <AuthInput
          type="email"
          label="Email"
          value={email}
          valueChanged={setEmail}
        />
        <AuthInput
          type="password"
          label="Senha"
          value={password}
          valueChanged={setPassword}
        />

        <button
          onClick={submit}
          className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 h-full" />

        <button
          onClick={loginGoogle}
          className={`w-full bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-3`}
        >
          Entrar com o Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setMode('register')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Crie uma conta gratuitamente</a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a onClick={() => setMode('login')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Entre com a suas credênciais</a>
          </p>
        )}
      </div>
    </div>
  )
}