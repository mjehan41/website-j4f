import { BookmarkCheck, ChevronUp, ShieldPlus } from "lucide-react";
import React from "react";

const dataKonten = [
  {
    ikon: ChevronUp,
    judul: "Jumlah",
    deskripsi: "Kami beranggotakan 9 Orang",
  },
  {
    ikon: ShieldPlus,
    judul: "Tahun",
    deskripsi: "Kami lahir pada tahun 2021",
  },
  {
    ikon: BookmarkCheck,
    judul: "Visi",
    deskripsi: "Fun, Kreatif, Positif",
  },
];

function AboutSection() {
  return (
    <section className="py-32">
      <div className="flex flex-col px-4 items-center justify-center max-w-7xl mx-auto gap-6">
        {/*Bagian Judul */}
        <div className="text-center space-y-4">
          <h1 className="font-bold text:4xl md:text-6xl">
            Mengenal Lebih Dekat Just For Fun
          </h1>
          <p className="text-gray-500">
            Just For Fun (JFF) adalah komunitas kreatif beranggotakan 9 orang
            siswa yang berdiri sejak 2021. Kami hadir sebagai ruang untuk
            bersenang-senang, berbagi ide, dan membangun kenangan bersama. Di
            JFF, setiap tawa, proyek, dan momen punya makna. Karena bagi kami,
            kebersamaan dan kreativitas adalah fondasi dari perjalanan luar
            biasa ini.
          </p>
        </div>

        {/* Bagian Kotak */}

        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
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

export default AboutSection;
