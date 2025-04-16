import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Beranda from "./pages/Beranda";
import DetailFilm from "./pages/DetailFilm";
import SedangTayang from "./pages/SedangTayang";
import Terpopuler from "./pages/Terpopuler";
import Mendatang from "./pages/Mendatang";
import Genre from "./pages/Genre";
import CariFilm from "./pages/CariFilm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Beranda />} />
          <Route path="detail-film" element={<DetailFilm />} />
          <Route path="sedang-tayang" element={<SedangTayang />} />
          <Route path="terpopuler" element={<Terpopuler />} />
          <Route path="mendatang" element={<Mendatang />} />
          <Route path="genre" element={<Genre />} />
          <Route path="cari-film" element={<CariFilm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
