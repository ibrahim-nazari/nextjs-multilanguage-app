import "../styles/globals.css";
import Store from "../src/store";
function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
