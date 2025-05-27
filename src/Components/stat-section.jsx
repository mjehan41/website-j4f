import { Star } from 'lucide-react'
import React from 'react'

function StatSection() {
  return (
    <section className="py-16">
      <div className="bg-[url(/Predator.jpg)] bg-fixed">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 items-center bg-black/70 backdrop-blur-sm text-center mx-auto py-16">
          <div className="font-bold text-white">
            <h1 className="text-5xl">1</h1>
            <p>Ketua</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">8</h1>
            <p>Anggota</p>
          </div>
          <div className="font-bold text-white">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl">5</h1>
              <Star />
            </div>
            <p>Review & Ulasan</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">9</h1>
            <p>Lulusan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection