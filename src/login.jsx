"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

import "./login.css"

export default function KirishForma() {
  const [email, setEmail] = useState("")
  const [parol, setParol] = useState("")
  const [parolKorsat, setParolKorsat] = useState(false)
  const [yuklanyapti, setYuklanyapti] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setYuklanyapti(true)

    // Login jarayoni simulatsiyasi
    setTimeout(() => {
      setYuklanyapti(false)
      alert("Muvaffaqiyatli kirildi!")
    }, 2000)
  }

  return (
    <div className="login-container">
      {/* Animatsiyali fon elementlari */}
      <div className="background-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      {/* Bosh sahifa tugmasi */}
      <button className="home-button" onClick={() => (window.location.href = "")}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
        <Link to="/">
        Bosh sahifa
        </Link>
      </button>

      {/* Login kartasi */}
      <div className="login-card">
        <div className="card-header">
          <div className="logo">
            <div className="logo-icon">🔐</div>
          </div>
          <h1 className="card-title">Hisobga kirish</h1>
          <p className="card-description">Hisobingizga kirish uchun ma'lumotlaringizni kiriting</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Elektron pochta
            </label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sizning@email.com"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="parol" className="form-label">
              Parol
            </label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="m7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="parol"
                type={parolKorsat ? "text" : "password"}
                value={parol}
                onChange={(e) => setParol(e.target.value)}
                placeholder="Parolingizni kiriting"
                className="form-input"
                required
              />
              <button type="button" onClick={() => setParolKorsat(!parolKorsat)} className="password-toggle">
                {parolKorsat ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <button type="submit" disabled={yuklanyapti} className={`submit-button ${yuklanyapti ? "loading" : ""}`}>
            {yuklanyapti ? (
              <>
                <div className="spinner"></div>
                Yuklanmoqda...
              </>
            ) : (
              "Kirish"
            )}
          </button>
        </form>

        <div className="card-footer">
          <p>
            Hisobingiz yo'qmi?{" "}
            <Link to="/register">
            <a href="" className="register-link">
              Ro'yxatdan o'ting
            </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
