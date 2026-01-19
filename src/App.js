import { Routes, Route } from "react-router-dom";

import "./App.css";
import "swiper/css";

import MainLayout from "./layouts/MainLayout";
import Visa from "./components/Visa/Visa";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import BookAnAppointment from "./components/BookAnAppointment";
import ScrollToTop from "./utils/useScrollTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/visa/:id" element={<Visa />} />
          <Route path="/visa/subcategory/:id" element={<Visa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<BookAnAppointment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
