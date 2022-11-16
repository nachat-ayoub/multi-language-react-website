import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { site_data } from "./utils";
import { useEffect, useState } from "react";

// ? Components :
import { Navbar, Footer } from "./components";

// ? Pages :
import { About, Home, Page_404 } from "./pages";

const Layout = ({ children, lang, setLang }) => {
  return (
    <div
      dir={site_data[lang].isRTL ? "rtl" : "ltr"}
      className="flex min-h-screen w-full flex-col"
    >
      <Navbar setLang={setLang} lang={lang} />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Router>
      <Layout setLang={setLang} lang={lang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="*" element={<Page_404 lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
