import type { AppContext, AppProps } from "next/app";
import { Layout } from "@/components/common";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
