import { CodeIcon, CodeXml, Facebook, FacebookIcon, Instagram, InstagramIcon, Twitter, TwitterIcon, Youtube, YoutubeIcon } from 'lucide-react';
import React from 'react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <CodeXml />
        <p>Copyright © {new Date().getFullYear()} - Just For Fun</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href='http://instagram.com'>
          <Instagram />
        </a>
        <a href='http://youtube.com'>
          <Youtube />
        </a>
        <a href="http://twitter.com"></a>
          <Twitter />
        <a href='http://facebook.com'>
          <Facebook />
        </a>
      </nav>
    </footer>
  );
}

export default Footer