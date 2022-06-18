import { useState } from "react";
import { AuthInput } from "../components/auth/AuthInput";

type Mode = 'login' | 'register';

export default function Autenticacao() {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput type="email" label="Email" value={email} valueChanged={setEmail}/>
      <AuthInput type="password" label="Senha" value={password} valueChanged={setPassword}/>
    </div>
  )
}