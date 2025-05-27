import { Calendar, MapPin } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-bold">JUST FOR FUN 4</h1>
          <p className="text-gray-500 text-xl">
            Just For Fun (JFF) adalah sebuah komunitas kreatif yang
            beranggotakan 9 orang, kami hadir sebagai ruang untuk
            bersenang-senang, berkarya, dan tumbuh bersama. Meski berawal dari
            hal-hal sederhana, setiap ide kami jalani dengan serius dan penuh
            semangat.
          </p>
          <ul className="flex gap-4 flex-col lg:flex-row text-center md:flex-row">
            <li>
              <a
                href="/Daftar-Anggota"
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Daftar Anggota
              </a>
            </li>
            <li>
              <a
                href="/Profil-Anggota"
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Profil Anggota
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <Calendar />
            <p>Berdiri Sejak 2021</p>
            <MapPin />
            <p>Tanjung Raja, Ogan Ilir, Sumatera Selatan</p>
          </div>
        </div>
        <img className="w-120" src="./logoj4f.jpg" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
