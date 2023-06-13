import styles from "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "@src/store";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
