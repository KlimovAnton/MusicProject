import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

import { Suspense } from "react";

export default function Layout ({ children }) {
  return (
      <div className={css.container}>
          <AppBar />
          <main>
            <Suspense fallback={<div></div>}>{children}</Suspense>
          </main>
          <Footer />
      </div>
  )
}