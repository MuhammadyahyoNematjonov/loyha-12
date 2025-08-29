"use client"
import { useState } from "react"
import { Link } from "react-router-dom"

const Boglanish = () => {
  const [qoraTema, setQoraTema] = useState(true)
  const [formData, setFormData] = useState({
    ism: "",
    telefon: "",
    xabar: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form yuborildi:", formData)
    // Bu yerda form ma'lumotlarini yuborish logikasi bo'ladi
  }


  
  return (


    
    <div className={`min-h-screen transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setQoraTema(!qoraTema)}
        className={`fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          qoraTema ? "bg-yellow-300 text-gray-900 hover:bg-yellow-200" : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {qoraTema ? "☀️" : "🌙"}
      </button>

      {/* Header */}
      <header
        className={`shadow-sm px-4 lg:px-8 py-4 fixed top-0 w-full z-50 transition-colors duration-300 ${
          qoraTema ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">iTLive</span>
            <div className="text-xs bg-blue-600 text-white px-1 rounded">®</div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              <Link to="/">
              Asosiy
              </Link>
            </a>
            <a
              href="#"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              <Link to="/Kurslar">
              Kurslar
              </Link>
            </a>
            <a
              href="#"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              <Link to="/BizHaqimizda">
              Biz haqimizda
              </Link>
            </a>
            <a href="#" className={`text-gray-500 font-medium transition-colors`}>
              <Link to="/Boglanish">
              Bog'lanish
              </Link>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                qoraTema ? "bg-blue-500 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Link to="/Login">
              Login
              </Link>
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Link to="/Register">
              Kirish
              </Link>
              
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Contact Info Section */}
        <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm mb-4">Bog'lanish</div>
              <h1 className={`text-4xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                Savollaringiz bo'lsa murojaat qiling
              </h1>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Telefon */}
              <div
                className={`p-8 rounded-2xl text-center transition-colors duration-300 ${
                  qoraTema ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${qoraTema ? "text-white" : "text-gray-900"}`}>Telefon</h3>
                <p className={`${qoraTema ? "text-gray-300" : "text-gray-600"}`}>+998(97) 566 50 50</p>
              </div>

              {/* Email */}
              <div
                className={`p-8 rounded-2xl text-center transition-colors duration-300 ${
                  qoraTema ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                  Elektron Pochta
                </h3>
                <p className={`${qoraTema ? "text-gray-300" : "text-gray-600"}`}>itliveguliston2023@gmail.com</p>
              </div>

              {/* Address */}
              <div
                className={`p-8 rounded-2xl text-center transition-colors duration-300 ${
                  qoraTema ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${qoraTema ? "text-white" : "text-gray-900"}`}>Manzil</h3>
                <p className={`${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                  Manzil: Sirdaryo vil, Guliston sh,1-mavze,
                  <br />
                  IT LIVE ACADEMY
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                  Murojaatlarni shu yerdan jo'nating!
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
                    To'liq ismingizni kiriting
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="ism"
                      value={formData.ism}
                      onChange={handleInputChange}
                      placeholder="F.I.Sh"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        qoraTema
                          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-5 h-5 ${qoraTema ? "text-gray-400" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
                    Telefon
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      placeholder="+998"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        qoraTema
                          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-5 h-5 ${qoraTema ? "text-gray-400" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${qoraTema ? "text-gray-300" : "text-gray-700"}`}>
                    Xabar
                  </label>
                  <textarea
                    name="xabar"
                    value={formData.xabar}
                    onChange={handleInputChange}
                    placeholder="Matn"
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      qoraTema
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`py-12 border-t transition-colors duration-300 ${
          qoraTema ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-600">iTLive</span>
            <div className="text-xs bg-blue-600 text-white px-1 rounded">®</div>
          </div>
          <p className={`mb-6 ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>Biz bilan muvaffaqiyatga erishling</p>
          <p className={`text-sm mb-6 ${qoraTema ? "text-gray-400" : "text-gray-500"}`}>
            Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
          </p>


          

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowVideoModal(true)} // Video modal ochish funksiyasini qo'shdim
              className={`px-4 py-2 border rounded-lg transition-colors ${qoraTema
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
            >
              Play Video
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Link to="/Boglanish">
              Bog'lanish
              </Link>
            </button>
          </div>

          <div className={`text-xs ${qoraTema ? "text-gray-500" : "text-gray-400"}`}>
            <p>© ITLIVE 2024. Barcha huquqlar himoyalangan</p>
            <p className="mt-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Xavfsizlik
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Boglanish
