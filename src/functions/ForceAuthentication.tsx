import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import Script from 'next/script';
import loadingGif from '../../public/images/loadingGif.gif';
import { useAuth } from '../hook/useAuth';

interface forceAuthProps {
  children: React.ReactNode;
}

export function ForceAuthentication({ children }: forceAuthProps) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <Script 
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie.includes("admin-template-cod3r-auth)) {
                  window.location.href = "/autenticacao"
                }
              `
            }}
          />
        </Head>
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