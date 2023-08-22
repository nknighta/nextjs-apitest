import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {AppProps} from "next/app";

type NexrPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MainLayoutProps = {
  Component: NexrPageWithLayout;
};
export default function  Main ({Component, pageProps}: AppProps & MainLayoutProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
        <Component {...pageProps} />
  );
};