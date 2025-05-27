import React from 'react'
import NavBar from '../Components/navbar'

function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-8 bg-base-200 rounded-box shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
      <form className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Nama</span>
          </label>
          <input
            type="text"
            placeholder="Nama lengkap"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Pesan</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Tulis pesan Anda di sini..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Kirim
        </button>
      </form>
    </div>
  );
}

export default ContactPage