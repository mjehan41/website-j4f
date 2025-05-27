import React from "react";
import NavBar from "../Components/navbar";

function Tentang() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto py-32">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Nama</time>
              <div className="text-lg font-black">Just For Fun 4 (JFF)</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">
                Merupakan tahun kelahiran Just For Fun
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Jumlah</time>
              <div className="text-lg font-black">
                Kami beranggotakan sembilan orang
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Visi</time>
              <div className="text-lg font-black">
                Fun, Kreatif, dan Positif
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Misi</time>
              <div className="text-lg font-black">
                Bersama, Berkarya, dan Bersenang-senang!
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <h1 className="text-5xl font-bold mb-4">JUST FOR FUN</h1>
        <p className="text-gray-500 text-xl text-left mb-6">
          Just For Fun (JFF) adalah komunitas kreatif beranggotakan 9 orang
          siswa yang berdiri sejak 2021. Kami hadir sebagai ruang untuk
          bersenang-senang, berbagi ide, dan membangun kenangan bersama. Di JFF,
          setiap tawa, proyek, dan momen punya makna. Karena bagi kami,
          kebersamaan dan kreativitas adalah fondasi dari perjalanan luar biasa
          ini.
        </p>
          <img className="flex justify-center items-center w-80 " src="./logoj4f.jpg" alt="" />
        <p className="text-gray-500 text-xl text-left">
          Desain logo berbentuk piringan dengan gradasi warna hitam ke merah di
          sisi luar, melambangkan keberanian, semangat, dan transisi dari ide ke
          aksi. Di bagian tengah, terdapat lingkaran dengan nuansa neon ungu dan
          biru, menghadirkan suasana retro futuristik yang mencerminkan semangat
          muda dan kreativitas yang tak lekang oleh waktu. Huruf besar “JFF”
          tampil mencolok dengan gaya tipografi modern bernuansa 80-an,
          memberikan kesan energik dan penuh gaya. Di atasnya tertulis “Just For
          Fun” dengan perpaduan warna hijau dan pink, mencerminkan suasana
          santai namun penuh semangat eksplorasi. Garis-garis cahaya di latar
          belakang memperkuat kesan dinamis dan arah gerak maju grup ini. Logo
          ini bukan hanya sekadar lambang visual, tapi juga perwujudan karakter
          dan filosofi JFF: tempat berkarya, bersenang-senang, dan bertumbuh
          bersama sebagai satu keluarga.
        </p>
      </div>
    </div>
  );
}

export default Tentang;
