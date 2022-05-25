import Layouts from "../components/layouts";

import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
