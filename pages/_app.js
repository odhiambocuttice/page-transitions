import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import { Navbar } from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="">
      <Navbar />
      <AnimatePresence>
        <Component {...pageProps} key={router.path} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
