import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppDesign from "./pages/AppDesign";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import GraphicsDesign from "./pages/GraphicsDesign";
import Locations from "./pages/Locations";
import WebDesign from "./pages/WebDesign";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/appdesign" element={<AppDesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/graphicsDesign" element={<GraphicsDesign />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/webDesign" element={<WebDesign />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
