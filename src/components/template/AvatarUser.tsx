import Link from "next/link";
import { useAuth } from "../../data/hook/useAuth";

interface AvatarUserProps {
  className?: string;
}

export function AvatarUser({ className }: AvatarUserProps) {
  const { user } = useAuth();

  return (
    <Link href='/perfil'>
      <img
        src={user?.imageUrl ?? '/images/avatar.svg'}
        alt="Avatar do usuário"
        className={`h-10 w-10 rounded-full cursor-pointer ${className}`}
      />
    </Link>
  )
}