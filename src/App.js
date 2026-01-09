import { Routes, Route } from "react-router-dom";

import "./App.css";
import "swiper/css";

import MainLayout from "./layouts/MainLayout";
import Visa from "./components/Visa/Visa";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/visa/:id" element={<Visa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
