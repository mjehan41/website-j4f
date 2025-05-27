import React from 'react'
import HeroSection from '../Components/hero-section'

function ProfilAnggota() {
    const fotoList = [
      { src: "/jehan.jpg", nama: "Jehan" },
      { src: "/agum.jpg", nama: "Agum" },
      { src: "/dzul.jpg", nama: "Dzul" },
      { src: "/satria.jpg", nama: "Satria" },
      { src: "/bagas.jpg", nama: "Bagas" },
      { src: "/repal.jpg", nama: "Repal" },
      { src: "/rahul.jpg", nama: "Rahul" },
      { src: "/abdi.jpg", nama: "Abdillah" },
      { src: "/kenny.jpg", nama: "Rizki" },
    ];
    
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Profil Personil J4F</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
      {fotoList.map(({ src, nama }, index) => (
  <div key={index} className="flex flex-col items-center space-y-2">
    <div className="overflow-hidden rounded-xl shadow-md">
      <img
        src={src}
        alt={`Foto ${index + 1}`}
        className="w-full h-64 object-cover aspect-[3/4] rounded-xl"
      />
    </div>
    <p className="text-center font-bold text-gray-700">{nama}</p>
  </div>
))}
      </div>
    </div>
  );
}

export default ProfilAnggota;