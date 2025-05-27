import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ContactPage from './pages/Kontak'
import Tentang from './pages/Tentang'
import DaftarAnggota from './pages/DaftarAnggota'
import ProfilAnggota from './pages/ProfilAnggota'




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Kontak" element={<ContactPage />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/Daftar-Anggota" element={<DaftarAnggota />} />
        <Route path="/Profil-Anggota" element={<ProfilAnggota />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
