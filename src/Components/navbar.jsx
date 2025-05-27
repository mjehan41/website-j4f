import { CodeXml, Fingerprint, Instagram } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 border bg-white/80 border-gray-300">
      <div className="flex max-w-7xl mx-auto justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Fingerprint size={32} />
          <h1 className="font-bold text-xl text-blue-500">JUST FOR FUN.</h1>
        </div>
        <ul className="items-center md:flex gap-8">
          <li>
            <a href="" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="/tentang" className="hover:text-red-500">
              Tentang
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-red-500">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href="https://www.instagram.com/teamjaf_/profilecard/?igsh=MTQ0ZTYzc2FmNTM5OQ=="
          className="flex gap-2 bg-blue-500 px-4 py-2 text-white rounded-md"
        >
          <Instagram />
          <p>Akun Instagram </p>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
