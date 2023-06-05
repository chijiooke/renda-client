import "@/styles/style.bundle.css";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import type { AppProps } from "next/app";
import { MyModal } from "@/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="flex">
        
      </div>

      <Component {...pageProps} />
    </Provider>
  );
}
