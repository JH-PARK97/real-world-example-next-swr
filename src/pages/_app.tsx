import type { AppContext, AppProps } from "next/app";

import { Layout } from "@/components/common";

import { API_URL } from "@/constants/API";

import { createContext, useMemo, useState } from "react";

export const GlobalContext = createContext({});

type AppPropsWithProfile = AppProps & {
  currentProfile: any; // currentProfile의 타입에 맞게 수정
};

function App({ Component, pageProps, currentProfile }: AppPropsWithProfile) {
  const [userInfo, setUserInfo] = useState(currentProfile);
  const value = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  return (
    <GlobalContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}
App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  let currentProfile = null;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = { ...pageProps };
  if (ctx.req?.headers.cookie) {
    const data = await fetch(API_URL.USER.ROOT, {
      headers: { Authorization: `Token ${ctx.req?.headers.cookie?.split("=")[1]}` },
    });
    currentProfile = await data.json();
  }

  return { pageProps, currentProfile };
};

export default App;
