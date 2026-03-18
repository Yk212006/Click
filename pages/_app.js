import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../reducer/store";
import "../styles/ProductGallery.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>Click Interior Solutions - Premium Interior Design | Bengaluru</title>
          <meta
            name="description"
            content="Click Interior Solutions - Premium interior design services in Bengaluru and across India. Transform your spaces into timeless luxury."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </>
    </Provider>
  );
}
