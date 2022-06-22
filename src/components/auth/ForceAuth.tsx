import Image from 'next/image';
import Router from 'next/router';
import loadingGif from '../../../public/images/loadingGif.gif';
import { useAuth } from '../../hook/useAuth';

interface forceAuthProps {
  children: React.ReactNode;
}

export function ForceAuth({ children }: forceAuthProps) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        {children}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loadingGif} />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    renderLoading();
  } else {
    Router.push('/autenticacao');
    return null;
  }
}