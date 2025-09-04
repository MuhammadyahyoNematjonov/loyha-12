"use client"
import { useState } from "react"
import { Link } from "react-router-dom"

const BizHaqimizda = () => {
  const [qoraTema, setQoraTema] = useState(true)

  const mentors = [
    {
      id: 1,
      name: "Abdulla Ergashev",
      specialty: "PHP & Laravel Developer",
      image: "./img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png",
      description: "5 yillik tajribaga ega PHP va Laravel bo'yicha mutaxassis"
    },
    {
      id: 2,
      name: "Javohir Toshmatov",
      specialty: "React.js Developer",
      image: "./img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png", 
      description: "Frontend texnologiyalar bo'yicha 4 yillik tajriba"
    },
    {
      id: 3,
      name: "Dilshod Karimov",
      specialty: "Node.js Developer",
      image: "./img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png",
      description: "Backend dasturlash va ma'lumotlar bazasi bo'yicha ekspert"
    },
    {
      id: 4,
      name: "Sardor Abdullayev",
      specialty: "Flutter Developer",
      image: "./img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png",
      description: "Mobil ilovalar yaratish bo'yicha professional"
    }
  ]

  const certificates = [
    {
      id: 1,
      title: "Dasturlash sertifikati",
      image: "./img/home.png"
    },
    {
      id: 2,
      title: "Tasdiqnoma",
      image: "./img/home.png"
    },
    {
      id: 3,
      title: "Guvohnoma",
      image: "./img/home.png"
    }
  ]

  const galleryImages = [
    "./img/home.png",
    "./img/home.png", 
    "./img/home.png",
    "./img/home.png",
  ]

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

      {/* Header/Navbar */}
      <header
        className={`shadow-sm px-4 lg:px-8 py-4 fixed top-0 w-full z-50 transition-colors duration-300 ${
          qoraTema ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">Book-Time</span>
            <div className="text-xs bg-blue-600 text-white px-1 rounded">®</div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Asosiy
            </Link>

            <Link 
              to="/Kurslar"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Kurslar
            </Link>
            
            <Link 
              to="/BizHaqimizda"
              className={`hover:text-blue-600 transition-colors text-gray-500 font-medium`}
            >
              Biz haqimizda
            </Link>

            <Link 
              to="/Boglanish"
              className={`hover:text-blue-600 transition-colors ${qoraTema ? "text-gray-300" : "text-gray-700"}`}
            >
              Boglanish
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 hover:animate-pulse transition-colors bg-blue-500 text-white rounded-2xl"
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="px-4 py-2 hover:animate-pulse transition-colors bg-blue-500 text-white rounded-2xl"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* About Section */}
        <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className={`text-4xl font-bold mb-6 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                Biz haqimizda
              </h1>
              <div className={`max-w-4xl mx-auto text-lg leading-relaxed ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                <p className="mb-4">
                  iTLIVE ACADEMY - 08.09.2022 yil tashkil etilgan va buguniga qadar faoliyat yolit keltirmoqda. iTLIVE ACADEMY kompaniyasining asosiy faoliyati orqali ishqan ko'rsatish. Kelgusii
                  xodimlariga o'qitish, IT sohasida xxiridolarimiz yordamchi berish dan iborat. Bizning akademiyamiz zamonaviy texnologiyalarning barcha indivilarimag ishlari yaratgan
                  dasturlashimizga. Shundan bo'lgan barcha texnologiyalar zamonaviy texnologiyalarni tanishtirishing kurs eni xal yaniy kompaniyalardagi IT kadriyatlarga
                  boyitaysiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${qoraTema ? "text-white" : "text-gray-900"}`}>
              Media galereya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-900" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${qoraTema ? "text-white" : "text-gray-900"}`}>
              Sertifikat va guvohномalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div 
                  key={cert.id}
                  className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    qoraTema ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
                  }`}
                >
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className={`text-lg font-semibold text-center ${qoraTema ? "text-white" : "text-gray-900"}`}>
                    {cert.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experienced Mentors Section */}
        <section className={`py-16 transition-colors duration-300 ${qoraTema ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                Tajribali Mentorlar
              </h2>
              <p className={`text-lg ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentors.map((mentor) => (
                <div 
                  key={mentor.id}
                  className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    qoraTema ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className={`text-lg font-bold mb-2 ${qoraTema ? "text-white" : "text-gray-900"}`}>
                      {mentor.name}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${qoraTema ? "text-blue-400" : "text-blue-600"}`}>
                      {mentor.specialty}
                    </p>
                    <p className={`text-sm ${qoraTema ? "text-gray-300" : "text-gray-600"}`}>
                      {mentor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl font-bold">iTLive</span>
                <div className="text-xs bg-white text-blue-600 px-1 rounded">®</div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Biz bilan muvaffaqiyatga erishish</h2>
              <p className="text-xl mb-8 opacity-90">
                Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                <Link to="/Boglanish"> 
                Bilan xabor
                </Link>
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                 <Link to="/Boglanish"> 
                Bog'lanish
                </Link>
              </button>
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
          
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Bog'lanish
            </button>
          </div>

          <div className={`text-xs ${qoraTema ? "text-gray-500" : "text-gray-400"}`}>
            <p>© iTLIVE 2024. Barcha huquqlar himoyalangan</p>
            <p className="mt-2 flex justify-between">
              <span></span>
              <Link to="/privacy" className="hover:text-blue-600 transition-colors">
                Maxfiylik
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BizHaqimizda