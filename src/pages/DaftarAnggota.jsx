import React from 'react'
import HeroSection from '../Components/hero-section'
import { Book, BookmarkCheck, Crown, Gem, Pickaxe, Rocket, ShieldBan, ShieldHalf, Sword } from 'lucide-react';

const dataKonten = [
  {
    ikon: Crown,
    judul: "Dwi Rahmat Agum",
    deskripsi: "Ketua",
  },
  {
    ikon: Gem,
    judul: "Muhammad Jehan",
    deskripsi: "Wakil Ketua 1",
  },
  {
    ikon: Sword,
    judul: "Dzul Fadhli A.Ghani",
    deskripsi: "Wakil Ketua 2",
  },
  {
    ikon: ShieldBan,
    judul: "Satria Wijaya",
    deskripsi: "Bendahara",
  },
  {
      ikon: ShieldHalf,
      judul: "Repaldi Tri Dharma",
      deskripsi: "Sekretaris",
    },
    {
        ikon: Pickaxe,
        judul: "Bagas Pratama",
        deskripsi: "Ketua Pasukan",
      },
  {
    ikon: Rocket,
    judul: "Rahul Delano Putra",
    deskripsi: "Anggota 1",
  },
  {
    ikon: Rocket,
    judul: "M. Rizki Iskandar",
    deskripsi: "Anggota 2",
  },
  {
    ikon: Rocket,
    judul: "Abdillah",
    deskripsi: "Anggota 3",
  },
];


function DaftarAnggota() {
    return ( 
      <section className="py-32">
        <div className="flex flex-col px-4 items-center justify-center max-w-7xl mx-auto gap-6">
          {/*Bagian Judul */}
          <div className="text-center space-y-4">
            <h1 className="font-bold text:4xl md:text-6xl">
              Mengenal Lebih Dekat Anggota J4F
            </h1>
            <p className="text-gray-500">
              Kami merupakan anggota dari grup just for fun:
            </p>
          </div>

          {/* Bagian Kotak */}

          <div className="flex flex-col items-center gap-4 mt-4">
            {dataKonten.map((data) => (
                <div className="flex items-center flex-col p-4 w-sm border border-gray-300">
                <div className="bg-red-200 p-4 rounded-full">
                  <data.ikon size={32} />
                </div>
                <h2 className="font-bold text-xl">{data.judul}</h2>
                <p className="text-gray-500">{data.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default  DaftarAnggota