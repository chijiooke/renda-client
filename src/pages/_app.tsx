"use client";

import store from "@/store/store";
import "@/styles/globals.css";
import "@/styles/style.bundle.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import { InfinitySpin } from "react-loader-spinner";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loadingPage, setloadingPage] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setloadingPage(true);
      return;
    };

    const handleRouteComplete = (url: string) => {
      setloadingPage(false);
      return;
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <Provider store={store}>
      {loadingPage && (
        <div className="h-full w-full fixed bg-[#04040459] flex z-[1290] items-center justify-center">
          <InfinitySpin width="200" color="#f99c22" />
        </div>
      )}

      <Component {...pageProps} />
    </Provider>
  );
}
