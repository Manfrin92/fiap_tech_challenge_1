import { useState } from "react"
import { AuthLayout } from "./auth-layout"
import IlustracaoLogin from "@/assets/images/ilustracaoLogin.svg"
import Button from "../button"
import Input from "../input"

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "@/config/firebaseConnection";

import useStateController from "@/hooks/use-state-controller";

import { ToastContainer, toast } from 'react-toastify';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useStateController();
 
  const handleSubmit =  async () => {
    if (email && password) {

      await signInWithEmailAndPassword(auth, email, password)
      .then((userAuthenticated) => {
        setUser(userAuthenticated.user)
        onSubmit({ email, password });
      })
      .catch(() => {
        toast.error('Usuário ou senha inválidos!')
      })

    }
  }

  return (
    <AuthLayout
      illustration={IlustracaoLogin}
      illustrationAlt="Ilustração Login"
      illustrationWidth={333.25}
      illustrationHeight={267}
      title="Login"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-left mb-2">
          <Button
            variant="link"
            label="Esqueci a senha!"
          />
        </div>
        <Button label="Acessar" onClick={handleSubmit} centered />
        <ToastContainer />
      </div>
    </AuthLayout>
  )
}
